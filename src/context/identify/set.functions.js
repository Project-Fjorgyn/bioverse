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

function ChooseQuestionSet(values, options) {
  /*
      values: the nested schema for this question
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
