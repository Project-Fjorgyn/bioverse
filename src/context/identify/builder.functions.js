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

export function BuildOptions(questionName, questionSchema, accumulatedKeyset, taxa) {
  var options = [];
  for (let i in taxa) {
    var info = taxa[i];
    for (let j in accumulatedKeyset) {
      info = info[accumulatedKeyset[j]];
    }
    if (questionName in info) {
      options.push(info[questionName]);
    } else {
      options.push(questionSchema['default']);
    }
  }
  return options;
}
