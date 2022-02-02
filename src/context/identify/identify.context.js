import { buildQuestion, BuildOptions } from './builder.functions';
import { filterOptions } from './filter.functions';

function SelectQuestion(schema, answered, taxa, accumulatedKeyset = null) {
  /*
    schema: current schema level for taxa in question
    taxa: full list of taxa under consideration
    accumulatedKeyset: ordered array of keys required to index
      index into the taxa to reach the current schema level
  */
  if (!accumulatedKeyset) {
    accumulatedKeyset = [];
  }

  var selectedQuestion = {
    expectation: 0,
    choice: null,
    questionView: null,
    answerView: null,
  };
  var selectedQuestionKeyset = null;
  var selectedQuestionSchema = null;
  var options = null;

  for (let key in schema) {
    var question_id = [...accumulatedKeyset, key].join('.');
    if (answered.some((id) => id === question_id)) {
      continue;
    }
    var question = { expectation: 0 };
    var question_keyset = null;
    var question_schema = null;
    var kind = schema[key]['kind'];
    if (kind === 'set' || kind === 'categorical' || kind === 'range') {
      options = BuildOptions(key, schema[key], accumulatedKeyset, taxa);
      question = buildQuestion[kind](schema[key]);
      question_keyset = [...accumulatedKeyset, key];
      question_schema = schema[key];
    } else if (schema[key]['kind'] === 'object') {
      var newAccumulatedKeyset = [...accumulatedKeyset, key];
      var result = SelectQuestion(schema[key]['members'], answered, taxa, newAccumulatedKeyset);
      question = result.selectedQuestion;
      question_keyset = result.selectedQuestionKeyset;
      question_schema = result.selectedQuestionSchema;
    }
    if (question.expectation > selectedQuestion.expectation) {
      selectedQuestion = question;
      selectedQuestionKeyset = question_keyset;
      selectedQuestionSchema = question_schema;
    }
  }
  return {
    selectedQuestionKeyset,
    selectedQuestion,
    selectedQuestionSchema,
  };
}

function FilterTaxa(answer, questionSchema, questionKeyset, selectedQuestion, taxa) {
  var key = questionKeyset[questionKeyset.length - 1];
  var accumulatedKeyset = questionKeyset.slice(0, questionKeyset.length - 2);
  var options = BuildOptions(key, questionSchema, accumulatedKeyset, taxa);
  var kept = filterOptions[questionSchema['kind']](answer, selectedQuestion.choice, options);
  var kept_taxa = [];
  for (let i in kept) {
    kept_taxa.push(taxa[kept[i]]);
  }
  return kept_taxa;
}
