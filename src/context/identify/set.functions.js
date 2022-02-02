import { GetExpectation } from './base';

function OptionsRemovedUnderSetChoice(choice, options) {
  /*
    choice: the question value chosen
    options: an array of question values for each taxa 
  */
  var removed_under_yes = [];
  var removed_under_no = [];
  for (let i in options) {
    if (options[i].some((c) => c === choice)) {
      removed_under_no.push(i);
    } else {
      removed_under_yes.push(i);
    }
  }
  return {
    removed_under_yes,
    removed_under_no,
  };
}

export function ChooseQuestionSet(values, options) {
  /*
    values: possible options
    options: an array of question values for each taxa 
  */
  var expectation = 0;
  var choice = null;
  for (let i in values) {
    var value = values[i];
    var { removed_under_yes, removed_under_no } = OptionsRemovedUnderSetChoice(value, options);
    var current_expectation = GetExpectation(
      [removed_under_yes.length, removed_under_no.length],
      options.length
    );
    if (current_expectation > expectation) {
      expectation = current_expectation;
      choice = value;
    }
  }
  return {
    choice,
    expectation,
  };
}

export function FilterOptionsSet(answer, choice, options) {
  var kept = [];
  for (let i in options) {
    if (answer && options[i].some((c) => c === choice)) {
      kept.push(i);
    } else if (
      !answer &&
      ((options[i].some((c) => c === choice) && options[i].length > 1) ||
        !options[i].some((c) => c === choice))
    ) {
      kept.push(i);
    }
  }
  return kept;
}
