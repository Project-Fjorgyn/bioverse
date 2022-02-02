import { QuestionViewSet, AnswerViewSet } from '../../components/set.components';
import { QuestionViewRange, AnswerViewRange } from '../../components/range.components';
import {
  QuestionViewCategorical,
  AnswerViewCategorical,
} from '../../components/categorical.components';
import { ChooseQuestionSet } from './set.functions';
import { ChooseQuestionRange } from './range.functions';
import { ChooseQuestionCategorical } from './categorical.functions';

function BuildQuestionSet(values, options) {
  /*
    values: possible options
    options: an array of question values for each taxa 
  */
  var { choice, expectation } = ChooseQuestionSet(values, options);
  return {
    choice,
    expectation,
    questionView: QuestionViewSet,
    answerView: AnswerViewSet,
  };
}

function BuildQuestionRange(values, options) {
  /*
    values: possible options
    options: an array of question values for each taxa 
  */
  var { choice, expectation } = ChooseQuestionRange(options);
  return {
    choice,
    expectation,
    questionView: QuestionViewRange,
    answerView: AnswerViewRange,
  };
}

function BuildQuestionCategorical(values, options) {
  /*
    values: possible options
    options: an array of question values for each taxa 
  */
  var { choice, expectation } = ChooseQuestionCategorical(values, options);
  return {
    choice,
    expectation,
    questionView: QuestionViewCategorical,
    answerView: AnswerViewCategorical,
  };
}

export const buildQuestion = {
  set: BuildQuestionSet,
  range: BuildQuestionRange,
  categorical: BuildQuestionCategorical,
};

export function BuildOptions(questionKeyset, questionSchema, taxa) {
  var final_key = questionKeyset[questionKeyset.length - 1];
  var approaching_keys = questionKeyset.slice(0, questionKeyset.length - 2);
  var options = [];
  for (let i in taxa) {
    var info = taxa[i];
    for (let j in approaching_keys) {
      info = info[accumulatedKeyset[j]];
    }
    if (final_key in info) {
      options.push(info[final_key]);
    } else {
      options.push(questionSchema['default']);
    }
  }
  return options;
}
