import React, { useState, createContext } from 'react';

export const ShortcutsContext = createContext();

export function ShortcutsContextProvider({ children }) {
  const [shortcuts, setShortcuts] = useState([
    { name: 'Pinales', common_name: 'conifers', link: 'pinales' },
    { name: 'Pinaceae', common_name: 'pine family', link: 'pinaceae' },
    { name: 'Pinus', common_name: 'pine', link: 'pinus' },
  ]);

  const addShortcut = () => null;

  const removeShortcut = () => null;

  return (
    <ShortcutsContext.Provider value={{ shortcuts, addShortcut, removeShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
}
