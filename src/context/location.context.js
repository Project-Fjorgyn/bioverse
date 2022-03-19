import React, { useState, createContext } from 'react';
import { polyfill } from 'h3-reactnative';

import { callLocationApi } from '../services/location/location.service';

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [species, setSpecies] = useState('americana');
  const [genus, setGenus] = useState('ulmus');
  const [hexIds, setHexIds] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(5);

  const doUpdateRegion = (latitude, longitude, latitudeDelta, longitudeDelta, genus, species) => {
    if (latitudeDelta < 10) {
      const nwCorner = [latitude + latitudeDelta / 1.5, longitude - longitudeDelta / 1.5];
      const neCorner = [latitude + latitudeDelta / 1.5, longitude + longitudeDelta / 1.5];
      const seCorner = [latitude - latitudeDelta / 1.5, longitude + longitudeDelta / 1.5];
      const swCorner = [latitude - latitudeDelta / 1.5, longitude - longitudeDelta / 1.5];
      var newHexIds = polyfill([nwCorner, neCorner, seCorner, swCorner, nwCorner], zoomLevel);
      var newZoomLevel = zoomLevel;
      const maxHexes = 250;
      // zoom in
      while (newHexIds.length <= maxHexes) {
        var attempt = polyfill(
          [nwCorner, neCorner, seCorner, swCorner, nwCorner],
          newZoomLevel + 1
        );
        if (attempt.length > maxHexes) {
          break;
        }
        newHexIds = attempt;
        newZoomLevel = newZoomLevel + 1;
      }
      // zoom out
      while (newHexIds.length > maxHexes) {
        newZoomLevel = newZoomLevel - 1;
        newHexIds = polyfill([nwCorner, neCorner, seCorner, swCorner, nwCorner], newZoomLevel);
      }
      setZoomLevel(newZoomLevel);
      callLocationApi(
        nwCorner,
        neCorner,
        seCorner,
        swCorner,
        newZoomLevel,
        genus,
        species,
        setHexIds
      );
    } else {
      setHexIds([]);
    }
  };

  const updateLocationSelection = (
    genus,
    species,
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta
  ) => {
    setSpecies(species);
    setGenus(genus);
    doUpdateRegion(latitude, longitude, latitudeDelta, longitudeDelta, genus, species);
  };

  const updateRegion = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
    doUpdateRegion(latitude, longitude, latitudeDelta, longitudeDelta, genus, species);
  };

  return (
    <LocationContext.Provider
      value={{
        hexIds,
        updateRegion,
        updateLocationSelection,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
