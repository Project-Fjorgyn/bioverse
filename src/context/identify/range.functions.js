import { GetExpectation, NumericOrder } from './base';

function ChooseQuestionRange(options) {
  /*
    options: an array of ranges for each taxa 
  */
  // we start by finding all the points at which
  // a range decision could make a difference
  // and we determine how many ranges start and
  // end at those points
  var events = [];
  var events_info = {};
  for (let i in options) {
    var start = options[i][0];
    var end = options[i][1];
    if (!(start in events_info)) {
      events_info[start] = [0, 0];
    }
    if (!(end in events_info)) {
      events_info[end] = [0, 0];
    }
    events_info[start][0] += 1;
    events_info[end][1] += 1;
  }
  // next we sort the events
  var sorted_events = events.sort(NumericOrder);
  // we make our first selection
  var choice = sorted_events[0];
  // at this point we know if we say "yes" (> split) to
  // this split we will exclude no options
  // and if we say no (<= split) exclude everthing
  // except the things starting at this point
  var removed_under_no = options.length - events_info[choice][0];
  var removed_under_yes = 0;
  var expectation = GetExpectation([removed_under_no, removed_under_yes], options.length);
  // now we loop through the remaining events
  for (let i = 1; i < sorted_events.length; i++) {
    var new_choice = sorted_events[i];
    // if this split includes start points then
    // there are a series of options we can no longer
    // exclude under a no condition
    removed_under_no -= events_info[new_choice][0];
    // on the other hand if we just went past an end
    // there are new things we can exclude under a yes
    // condition
    removed_under_yes += events_info[new_choice][1];
    var new_expectation = GetExpectation([removed_under_no, removed_under_yes], options.length);
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

export function FilterOptionsRange(answer, choice, options) {
  var kept = [];
  for (let i in options) {
    if (answer === 'yes' && options[i][1] > choice) {
      kept.push(i);
    } else if (answer === 'no' && options[i][0] > choice) {
      kept.push(i);
    } else if (answer === 'unsure') {
      kept.push(i);
    }
  }
  return kept;
}
