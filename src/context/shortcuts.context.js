import React, { useState, createContext } from 'react';
import { BuildTree } from '../services/vocab/vocab.service';

export const ShortcutsContext = createContext();

export function ShortcutsContextProvider({ children }) {
  const [shortcuts, setShortcuts] = useState([BuildTree('Trees', 'trees', 'trees')]);

  const addShortcut = () => null;

  const removeShortcut = () => null;

  return (
    <ShortcutsContext.Provider value={{ shortcuts, addShortcut, removeShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
}
