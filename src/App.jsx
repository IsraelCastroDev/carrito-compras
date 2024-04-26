import { useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartProvider } from "./context/cart";
import { FiltersProvider } from "./context/filters";
import { ProductsProvider } from "./context/products";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { stateDarkMode } = useDarkMode();

  useEffect(() => {
    document
      .querySelector("html")
      .classList.toggle("dark", stateDarkMode === "dark");
  }, [stateDarkMode]);

  return (
    <FiltersProvider>
      <Header />
      <CartProvider>
        <ProductsProvider>
          <Products />
        </ProductsProvider>
        <Cart />
      </CartProvider>
    </FiltersProvider>
  );
}

export default App;
