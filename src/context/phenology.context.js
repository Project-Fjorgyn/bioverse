import React, { useState, createContext } from 'react';

import { GetPhenology } from '../services/phenology/phenology.service';

export const PhenologyContext = createContext();

export function PhenologyContextProvider({ children }) {
  const [phenology, setPhenology] = useState(GetPhenology(3));

  return <PhenologyContext.Provider value={{ phenology }}>{children}</PhenologyContext.Provider>;
}
