export function GetWikiLink(genus, species) {
  return `https://en.wikipedia.org/wiki/${genus}_${species}`;
}

export function GetiNatLink(genus, species) {
  genus = genus.toLowerCase();
  species = species.toLowerCase();
  inat_info = require('../../../assets/explore/inat_info.json').filter(
    (e) => e.genus === genus && e.species === species
  );
  if (inat_info.length > 0) {
    var inat_id = inat_info[0]['iNatID'];
    return `https://www.inaturalist.org/taxa/${inat_id}`;
  } else {
    return `https://www.inaturalist.org/taxa/${genus}-${species}`;
  }
}
