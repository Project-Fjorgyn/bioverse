import React, { useState, createContext } from 'react';
import { polyfill } from 'h3-reactnative';

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [hexIds, setHexIds] = useState(['872a32a13ffffff']);
  const [latitude, setLatitude] = useState(42.5970023);
  const [longitude, setLongitude] = useState(-71.8700897);
  const [latitudeDelta, setLatitudeDelta] = useState(0.02);
  const [longitudeDelta, setLongitudeDelta] = useState(0.02);
  const [zoomLevel, setZoomLevel] = useState(5);

  const updateRegion = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
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
      setLatitude(latitude);
      setLongitude(longitude);
      setLatitudeDelta(latitudeDelta);
      setLongitudeDelta(longitudeDelta);
      setHexIds(newHexIds);
    } else {
      setLatitude(latitude);
      setLongitude(longitude);
      setLatitudeDelta(latitudeDelta);
      setLongitudeDelta(longitudeDelta);
      setHexIds([]);
    }
  };

  return (
    <LocationContext.Provider
      value={{ hexIds, latitude, longitude, latitudeDelta, longitudeDelta, updateRegion }}
    >
      {children}
    </LocationContext.Provider>
  );
}
