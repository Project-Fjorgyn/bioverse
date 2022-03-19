import React, { useState, createContext } from 'react';

import { GetWikiLink } from '../services/links/links.service';

export const InfoContext = createContext();

export function InfoContextProvider({ children }) {
  const [genus, setGenus] = useState('amelanchier');
  const [species, setSpecies] = useState('laevis');
  const [wikiLink, setWikiLink] = useState(GetWikiLink('amelanchier', 'laevis'));

  const updateSelection = (genus, species) => {
    setGenus(genus);
    setSpecies(species);
    setWikiLink(GetWikiLink(genus, species));
  };

  return (
    <InfoContext.Provider value={{ genus, species, wikiLink, updateSelection }}>
      {children}
    </InfoContext.Provider>
  );
}
