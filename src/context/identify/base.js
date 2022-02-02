export function NumericOrder(a, b) {
  return a - b;
}

export function GetExpectation(exclusions, total) {
  /*
      exclusions: array of count of exclusions per choice
      total: size of pool to make exclusions from
    */
  var sum = 0;
  for (let i in exclusions) {
    sum += (exclusions[i] * (total - exclusions[i])) / total;
  }
  return sum;
}
