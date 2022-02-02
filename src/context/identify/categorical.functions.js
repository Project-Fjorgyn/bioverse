import { GetExpectation } from './base';

export function ChooseQuestionCategorical(values, options) {
  /*
    values: possible options
    options: an array of question values for each taxa 
  */
  var choice = null;
  var expectation = -1;
  for (let i in values) {
    var new_choice = values[i];
    removed_under_no = options.reduce(
      (prior, current) => (current === new_choice ? prior + 1 : prior),
      0
    );
    removed_under_yes = options.reduce(
      (prior, current) => (current !== new_choice ? prior + 1 : prior),
      0
    );
    var new_expectation = GetExpectation([removed_under_yes, removed_under_no], options.length);
    if (new_expectation > expectation) {
      choice = new_choice;
      expectation = new_expectation;
    }
  }
  return {
    choice,
    expectation,
  };
}

export function FilterOptionsCategorical(answer, choice, options) {
  var kept = [];
  for (let i in options) {
    if (answer === 'yes' && options[i] === choice) {
      kept.push(i);
    } else if (answer === 'no' && options[i] !== choice) {
      kept.push(i);
    } else if (answer === 'unsure') {
      kept.push(i);
    }
  }
  return kept;
}
