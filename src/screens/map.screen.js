import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { GridCell } from '../components/polygon.components';

import { LocationContext } from '../context/location.context';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export function MapScreen({ navigation }) {
  const { hexIds, latitude, longitude, latitudeDelta, longitudeDelta, updateRegion } =
    useContext(LocationContext);

  var count = 0;

  const updateRegionDelay = (region) => {
    count += 1;
    const last_count = count;
    setTimeout(() => {
      if (count === last_count) {
        updateRegion(region);
      }
    }, 500);
  };

  const callAPI = () => {
    fetch('http://127.0.0.1:5000/location?hex_id=89054b6a687ffff&genus=ulmus&species=americanus')
      .then((data) => {
        return data.json();
      })
      .then((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Map
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
        onRegionChangeComplete={updateRegionDelay}
      >
        {hexIds.map((hex_id) => (
          <GridCell key={hex_id} hex_id={hex_id} />
        ))}
      </Map>
    </>
  );
}
