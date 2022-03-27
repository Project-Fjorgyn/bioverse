import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { GridCell } from '../components/polygon.components';
import { LocationContext } from '../context/location.context';
import { CreditsContainer, Credits } from '../components/credits.components';
import { SafeArea } from '../components/containers.components';
import { MapContext } from '../context/map.context';
import { SpeciesTitle, Info } from '../components/typography.components';
import {
  SpeciesTitleContainer,
  MapInfoContainer,
  MapActivityContainer,
} from '../components/containers.components';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export function MapScreen({ navigation }) {
  const { hexIds, updateRegion, species, genus, needsZoom, isLoading } =
    useContext(LocationContext);
  const { captureNewRegion } = useContext(MapContext);

  var count = 0;

  const updateRegionDelay = (region) => {
    captureNewRegion(region);
    count += 1;
    const last_count = count;
    setTimeout(() => {
      if (count === last_count) {
        updateRegion(region);
      }
    }, 500);
  };

  return (
    <SafeArea>
      <SpeciesTitleContainer>
        <SpeciesTitle>{`${genus} ${species}`}</SpeciesTitle>
      </SpeciesTitleContainer>
      {needsZoom && (
        <MapInfoContainer>
          <Info>Zoom to See Results</Info>
        </MapInfoContainer>
      )}
      {isLoading && (
        <MapActivityContainer>
          <ActivityIndicator animating color={Colors.red800} size="large" />
        </MapActivityContainer>
      )}
      <Map onRegionChangeComplete={updateRegionDelay}>
        {hexIds.map((hex_id) => (
          <GridCell key={hex_id} hex_id={hex_id} />
        ))}
      </Map>
      <CreditsContainer>
        <Credits>Credit: GBIF.org https://doi.org/10.15468/dl.274ktm</Credits>
      </CreditsContainer>
    </SafeArea>
  );
}
