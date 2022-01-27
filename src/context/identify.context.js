import React, { createContext, useState } from 'react';

import { PINUS_DATA, PINUS_QUESTIONS } from '../data/pinus';

export const IdentifyContext = createContext();

function numericOrder(a, b) {
  return a - b;
}

function GetFuzz(sorted_events) {
  var difs = [];
  var j = null;
  for (let i = 0; i < sorted_events.length - 1; i++) {
    j = i + 1;
    difs.push(sorted_events[j] - sorted_events[i]);
  }
  var minimum_dif = difs.sort(numericOrder)[0];
  if (sorted_events[0] < minimum_dif) {
    return sorted_events / 2.0;
  } else {
    return minimum_dif / 2.0;
  }
}

function GetExpectation(options, total) {
  var sum = 0;
  for (let i = 0; i < options.length; i++) {
    sum += (options[i] * (total - options[i])) / total;
  }
  return sum;
}

function GetSplitAndScore(ranges) {
  var event_info = {};
  var events = [];
  var start = null;
  var end = null;
  var range = null;
  for (let i = 0; i < ranges.length; i++) {
    range = ranges[i];
    start = range[0];
    end = range[1];
    if (!(start in event_info)) {
      events.push(start);
      event_info[start] = [0, 0];
    }
    if (!(end in event_info)) {
      events.push(end);
      event_info[end] = [0, 0];
    }
    event_info[start][0] += 1;
    event_info[end][1] += 1;
  }
  var sorted_events = events.sort(numericOrder);
  var fuzz = GetFuzz(sorted_events);

  var total = ranges.length;
  var total_pos = 0;
  var total_neg = total;
  var split = fuzz;
  var expectation = GetExpectation([total_pos, total_neg], total);
  var new_expectation = null;
  var event = null;
  for (let i = 0; i < sorted_events.length; i++) {
    event = sorted_events[i];
    total_pos += event_info[event][1];
    total_neg -= event_info[event][0];
    new_expectation = GetExpectation([total_pos, total_neg], total);
    if (new_expectation < expectation) {
      return { split, score: expectation };
    }
    expectation = new_expectation;
    split = event + fuzz;
  }
  return { split, score: expectation };
}

function get(obj, key, fallback) {
  return key in obj ? obj[key] : fallback;
}

function ScoreCategoricalQuestion(question, species) {
  var categories = species.map((s) => get(s['features'], question, 0));
  var total = categories.length;
  var max_value = categories.sort(numericOrder).reverse()[0];
  var options = [];
  for (let i = 0; i <= max_value; i++) {
    options.push(categories.reduce((total, c) => (c == i ? total + 1 : total), 0));
  }
  return GetExpectation(options, total);
}

function SplitAndScoreRangeQuestion(question, species) {
  var ranges = species.map((s) => s['features'][question]);
  return GetSplitAndScore(ranges);
}

function rangeFilterFunc(species, question, split, answer) {
  if (answer == 1 && species['features'][question][1] < split) {
    return false;
  }
  if (answer == 0 && species['features'][question][0] > split) {
    return false;
  }
  return true;
}

export function IdentifyContextProvider({ children }) {
  const [activeQuestions, setActiveQuestions] = useState(PINUS_QUESTIONS);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(PINUS_DATA);

  const reset = () => {
    setActiveQuestions(PINUS_QUESTIONS);
    setAnsweredQuestions([]);
    setSelectedSpecies(PINUS_DATA);
  };

  const getNextQuestion = () => {
    var best_question_score = 0;
    var best_question = null;
    var best_question_info = {};
    var score = null;
    var split = null;
    var question_info = null;
    var split_and_score = null;
    var question = null;
    for (let i in activeQuestions) {
      question = activeQuestions[i]['question'];
      question_info = activeQuestions[i]['question_info'];
      if (question_info['kind'] == 'categorical') {
        score = ScoreCategoricalQuestion(question, selectedSpecies);
        if (score > best_question_score) {
          best_question_score = score;
          best_question = question;
          best_question_info = question_info;
        }
      } else {
        split_and_score = SplitAndScoreRangeQuestion(question, selectedSpecies);
        split = split_and_score['split'];
        score = split_and_score['score'];
        if (score > best_question_score) {
          best_question_score = score;
          best_question = question;
          best_question_info = question_info;
          best_question_info['options'] = {
            0: 'no',
            1: 'yes',
          };
          best_question_info['split'] = split;
          best_question_info['prompt'] =
            'Is the ' +
            best_question_info['subject'] +
            ' >= ' +
            split +
            best_question_info['unit'] +
            '?';
        }
      }
    }
    return {
      question: best_question,
      question_info: best_question_info,
    };
  };

  const answerQuestion = (answered_question, question_info, answer) => {
    question_info['answer'] = answer;
    setAnsweredQuestions([...answeredQuestions, { question: answered_question, question_info }]);
    setActiveQuestions(activeQuestions.filter(({ question }) => question !== answered_question));
    if (question_info['kind'] === 'categorical') {
      setSelectedSpecies(
        selectedSpecies.filter((s) => get(s['features'], answered_question, 0) == answer)
      );
    } else {
      setSelectedSpecies(
        selectedSpecies.filter((s) =>
          rangeFilterFunc(s, answered_question, question_info['split'], answer)
        )
      );
    }
  };

  return (
    <IdentifyContext.Provider
      value={{
        answeredQuestions,
        selectedSpecies,
        reset,
        getNextQuestion,
        answerQuestion,
      }}
    >
      {children}
    </IdentifyContext.Provider>
  );
}
