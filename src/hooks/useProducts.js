import { useContext } from "react";
import { ProductsContext } from "../context/products.jsx";

export function useProducts() {
  const contextProducts = useContext(ProductsContext);

  if (contextProducts === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return contextProducts;
}
