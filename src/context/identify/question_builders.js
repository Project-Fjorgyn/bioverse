import { QuestionViewSet, AnswerViewSet } from './set.components';
import { ChooseQuestionSet } from './set.functions';

export function BuildQuestionSet(questionSchema, options) {
  /*
          question_schema: the nested schema for this question
          options: an array of question values for each taxa 
        */
  var { choice, expectation } = ChooseQuestionSet(questionSchema.values, options);
  return {
    choice,
    expectation,
    questionView: QuestionViewSet,
    answerView: AnswerViewSet,
  };
}

function BuildQuestionRange(question_schema, options) {
  /*
      question_schema: the nested schema for this question
      options: an array of question values for each taxa 
    */
  return null;
}

function BuildQuestionCategorical(question_schema, options) {
  /*
      question_schema: the nested schema for this question
      options: an array of question values for each taxa 
    */
  return null;
}

export const buildQuestion = {
  set: BuildQuestionSet,
  range: BuildQuestionRange,
  categorical: BuildQuestionCategorical,
};
