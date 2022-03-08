import React, { useState, createContext } from 'react';

import { GetPhenology } from '../services/phenology/phenology.service';

export const PhenologyContext = createContext();

export function PhenologyContextProvider({ children }) {
  const PreparePhenology = (p) => {
    return p.sort((a, b) => b.score - a.score);
  };

  const [phenology, setPhenology] = useState(PreparePhenology(GetPhenology(3)));
  const [month, setMonth] = useState(3);

  const updateMonth = (month) => {
    setMonth(month);
    setPhenology(PreparePhenology(GetPhenology(month)));
  };

  return (
    <PhenologyContext.Provider value={{ phenology, month, updateMonth }}>
      {children}
    </PhenologyContext.Provider>
  );
}
