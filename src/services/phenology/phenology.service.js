export function GetPhenology(month) {
  return require('../../../assets/explore/pheno_events.json').filter((p) => p.month === month);
}
