import React from 'react';

const FiltersContext = React.createContext(null);

function useFilters() {
  const context = React.useContext(FiltersContext);
  if (context === undefined) {
    throw new Error(`useFilters must be used within a FiltersContext.Provider`);
  }
  return context;
}

export {FiltersContext, useFilters};
