import { GetExpectation } from './base';

function OptionsRemovedUnderSetChoice(choice, options) {
  /*
    choice: the question value chosen
    options: an array of question values for each taxa 
  */
  var removed_under_yes = [];
  var removed_under_no = [];
  for (let i in options) {
    if (options[i].length === 1 && options[i][0] === choice) {
      removed_under_no.push(i);
    } else if (!options[i].some((c) => c === choice)) {
      removed_under_yes.push(i);
    }
  }
  return {
    removed_under_yes,
    removed_under_no,
  };
}

function WeightsUnderSetChoice(choice, options) {
  var weight_under_yes = 0;
  var weight_under_no = 0;
  for (let i in options) {
    var num_yes = options[i].reduce(
      (prior, current) => (current === choice ? prior + 1 : prior),
      0
    );
    var num_no = options[i].length - num_yes;
    weight_under_yes += num_yes / options.length;
    weight_under_no += num_no / options.length;
  }
  return {
    weight_under_yes,
    weight_under_no,
  };
}

export function ChooseQuestionSet(values, options, used_choices) {
  /*
    values: possible options
    options: an array of question values for each taxa 
    used_choices: questions already asked
  */
  var expectation = 0;
  var choice = null;
  if (values.length === used_choices.length + 1) {
    // in this case we've actually answered all the
    // the questions
    return {
      choice,
      expectation,
    };
  }
  for (let i in values) {
    var value = values[i];
    if (used_choices.some((c) => c === value)) {
      continue;
    }
    var { removed_under_yes, removed_under_no } = OptionsRemovedUnderSetChoice(value, options);
    var { weight_under_yes, weight_under_no } = WeightsUnderSetChoice(value, options);
    var current_expectation = GetExpectation(
      [removed_under_yes.length, removed_under_no.length],
      [weight_under_yes, weight_under_no]
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
    if (answer === 'yes' && options[i].some((c) => c === choice)) {
      kept.push(i);
    } else if (
      answer === 'no' &&
      ((options[i].some((c) => c === choice) && options[i].length > 1) ||
        !options[i].some((c) => c === choice))
    ) {
      kept.push(i);
    } else if (answer === 'unsure') {
      kept.push(i);
    }
  }
  return kept;
}
