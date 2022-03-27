import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { GridCell } from '../components/polygon.components';
import { LocationContext } from '../context/location.context';
import { CreditsContainer, Credits } from '../components/credits.components';
import { SafeArea } from '../components/containers.components';
import { MapContext } from '../context/map.context';
import { SpeciesTitle, SpeciesTitleContainer } from '../components/phenology.components';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export function MapScreen({ navigation }) {
  const { hexIds, updateRegion, species, genus } = useContext(LocationContext);
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
