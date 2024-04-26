import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const contextFilters = useContext(FiltersContext);

  if (contextFilters === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return contextFilters;
}
