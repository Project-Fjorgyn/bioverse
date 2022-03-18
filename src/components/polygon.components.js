import React from 'react';
import { Polygon } from 'react-native-maps';
import { h3ToGeoBoundary } from 'h3-reactnative';

export function GridCell({ hex_id }) {
  const hexBoundary = h3ToGeoBoundary(hex_id);
  const coordinates = hexBoundary.map((e) => ({ latitude: e[0], longitude: e[1] }));
  return (
    <Polygon
      coordinates={coordinates}
      fillColor={'rgba(255, 127, 0, 0.25)'}
      strokeColor={'rgba(255, 127, 0, 0.5)'}
    />
  );
}
