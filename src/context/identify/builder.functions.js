import { ChooseQuestionSet } from './set.functions';
import { ChooseQuestionRange } from './range.functions';
import { ChooseQuestionCategorical } from './categorical.functions';

export function BuildQuestionSet(values, options, used_choices) {
  /*
    values: possible options
    options: an array of question values for each taxa 
    used_choices: questions already asked
  */
  var { choice, expectation } = ChooseQuestionSet(values, options, used_choices);
  return {
    choice,
    expectation,
  };
}

export function BuildQuestionRange(values, options, used_choices) {
  /*
    values: possible options
    options: an array of question values for each taxa 
    used_choices: questions already asked
  */
  var { choice, expectation } = ChooseQuestionRange(options, used_choices);
  return {
    choice,
    expectation,
  };
}

export function BuildQuestionCategorical(values, options, used_choices) {
  /*
    values: possible options
    options: an array of question values for each taxa 
    used_choices: questions already asked
  */
  var { choice, expectation } = ChooseQuestionCategorical(values, options, used_choices);
  return {
    choice,
    expectation,
  };
}

export const buildQuestion = {
  set: BuildQuestionSet,
  range: BuildQuestionRange,
  categorical: BuildQuestionCategorical,
};

export function BuildOptions(questionKeyset, questionSchema, taxa) {
  var final_key = questionKeyset[questionKeyset.length - 1];
  var approaching_keys = questionKeyset.slice(0, questionKeyset.length - 1);
  var options = [];
  for (let i in taxa) {
    var info = taxa[i];
    for (let j in approaching_keys) {
      info = info[approaching_keys[j]];
    }
    if (final_key in info) {
      options.push(info[final_key]);
    } else {
      options.push(questionSchema['default']);
    }
  }
  return options;
}
