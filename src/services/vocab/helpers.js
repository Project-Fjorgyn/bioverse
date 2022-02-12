export function referenceArt(schema, artwork) {
  for (let key in schema) {
    if (schema[key]['kind'] === 'object') {
      schema[key]['members'] = referenceArt(schema[key]['members'], artwork);
    } else {
      if (schema[key]['artwork']) {
        if (typeof schema[key]['artwork'] === 'string') {
          schema[key]['artwork'] = artwork[schema[key]['artwork']];
        } else if (typeof schema[key]['artwork'] === 'object') {
          for (let art_key in schema[key]['artwork']) {
            if (typeof schema[key]['artwork'][art_key] === 'string') {
              schema[key]['artwork'][art_key] = artwork[schema[key]['artwork'][art_key]];
            }
          }
        }
      }
    }
  }
  return schema;
}
