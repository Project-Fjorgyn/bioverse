import React, { useState, createContext } from 'react';

import { GetWikiLink, GetiNatLink } from '../services/links/links.service';

export const InfoContext = createContext();

export function InfoContextProvider({ children }) {
  const [genus, setGenus] = useState('amelanchier');
  const [species, setSpecies] = useState('laevis');
  const [iNatLink, setiNatLink] = useState(GetiNatLink('amelanchier', 'laevis'));
  const [wikiLink, setWikiLink] = useState(GetWikiLink('amelanchier', 'laevis'));

  const updateSelection = (genus, species) => {
    setGenus(genus);
    setSpecies(species);
    setiNatLink(GetiNatLink(genus, species));
    setWikiLink(GetWikiLink(genus, species));
  };

  return (
    <InfoContext.Provider value={{ genus, species, iNatLink, wikiLink, updateSelection }}>
      {children}
    </InfoContext.Provider>
  );
}
