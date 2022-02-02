function LoadJSON(file_path) {
  var jsonData = require(file_path);
  return JSON.parse(jsonData);
}

export function LoadSchema(path) {
  var file_path = `../../assets/vocab/data/${path.join('/')}/schema.json`;
  return LoadJSON(file_path);
}

export function LoadTaxa(path) {
  var file_path = `../../assets/vocab/data/${path.join('/')}/member.json`;
  return LoadJSON(file_path);
}
