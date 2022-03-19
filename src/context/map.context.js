import React, { createContext, useState } from 'react';

export const MapContext = createContext();

export function MapContextProvider({ children }) {
  const [latitude, setLatitude] = useState(42.30533947192546);
  const [longitude, setLongitude] = useState(-72.61722523523223);
  const [latitudeDelta, setLatitudeDelta] = useState(0.2);
  const [longitudeDelta, setLongitudeDelta] = useState(0.2);

  const captureNewRegion = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setLatitudeDelta(latitudeDelta);
    setLongitudeDelta(longitudeDelta);
  };

  return (
    <MapContext.Provider
      value={{ latitude, longitude, latitudeDelta, longitudeDelta, captureNewRegion }}
    >
      {children}
    </MapContext.Provider>
  );
}
