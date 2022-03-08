import React, { useState, createContext } from 'react';

import { GetPhenology } from '../services/phenology/phenology.service';

export const PhenologyContext = createContext();

export function PhenologyContextProvider({ children }) {
  const [phenology, setPhenology] = useState(GetPhenology(3));
  const [month, setMonth] = useState(3);

  const updateMonth = (month) => {
    setMonth(month);
    setPhenology(GetPhenology(month));
  };

  return (
    <PhenologyContext.Provider value={{ phenology, month, updateMonth }}>
      {children}
    </PhenologyContext.Provider>
  );
}
