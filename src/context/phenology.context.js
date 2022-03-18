import React, { useState, createContext } from 'react';

import { GetPhenology } from '../services/phenology/phenology.service';

export const PhenologyContext = createContext();

export function PhenologyContextProvider({ children }) {
  const PreparePhenology = (p) => {
    return p.sort((a, b) => b.score - a.score);
  };

  const [phenology, setPhenology] = useState(PreparePhenology(GetPhenology(3)));
  const [month, setMonth] = useState(3);
  const [phenoPhase, setPhenoPhase] = useState('Flowers or flower buds');

  const updateMonth = (month) => {
    setMonth(month);
    const newPhenology = PreparePhenology(GetPhenology(month));
    setPhenology(newPhenology);
    if (newPhenology.filter(({ phenophase_name }) => phenophase_name === phenoPhase).length === 0) {
      setPhenoPhase(newPhenology[0].phenophase_name);
    }
  };

  return (
    <PhenologyContext.Provider value={{ phenology, month, updateMonth, phenoPhase, setPhenoPhase }}>
      {children}
    </PhenologyContext.Provider>
  );
}
