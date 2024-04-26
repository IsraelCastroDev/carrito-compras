import { useEffect, useState, createContext } from "react";
import { useFilters } from "../hooks/useFilters";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const contextFilters = useFilters();
  const { filtersProducts } = contextFilters;
  const filteredProducts = filtersProducts(products);

  return (
    <ProductsContext.Provider
      value={{
        setProducts,
        products: filteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
