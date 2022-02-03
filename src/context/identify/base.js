export function NumericOrder(a, b) {
  return a - b;
}

export function GetExpectation(exclusions, weights) {
  /*
      exclusions: array of count of exclusions per choice
      total: size of pool to make exclusions from
    */
  var sum = 0;
  var total = weights.reduce((prior, current) => prior + current, 0);
  for (let i in exclusions) {
    sum += (exclusions[i] * weights[i]) / total;
  }
  return sum;
}
