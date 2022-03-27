export function callLocationApi(
  nwCorner,
  neCorner,
  seCorner,
  swCorner,
  zoom,
  genus,
  species,
  setHexIds,
  setIsLoading
) {
  var lat = `${nwCorner[0]},${neCorner[0]},${seCorner[0]},${swCorner[0]},${nwCorner[0]}`;
  var lon = `${nwCorner[1]},${neCorner[1]},${seCorner[1]},${swCorner[1]},${nwCorner[1]}`;
  var uri = `https://bioverse-positions.herokuapp.com/locations?lat=${lat}&lon=${lon}&zoom=${zoom}&genus=${genus}&species=${species}`;
  fetch(uri)
    .then((data) => {
      return data.json();
    })
    .then((d) => {
      setHexIds(d.map((o) => o['hex_id']));
      setIsLoading(false);
    });
}
