import { useState, createContext } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        filtersProducts,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
