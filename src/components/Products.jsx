import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
import { IconAddToCart } from "./Icons/IconAddToCart";

function Products() {
  const contextProducts = useProducts();
  const { products } = contextProducts;
  const { addToCart } = useCart();

  return (
    <main className="max-w-[60rem] mx-auto">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5">
        {products.length === 0 ? (
          <div className="text-center h-[calc(100vh-12rem)] flex flex-col justify-center">
            <p className="text-2xl font-semibold">
              Upps! No se encontraron productos.
            </p>
            <p className="font-semibold">Prueba ajustando los filtros.</p>
          </div>
        ) : (
          products.map((product) => (
            <li
              key={product.id}
              className="bg-white dark:bg-black p-5 rounded-lg flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={`Imagen de ${product.title}`}
                className="block w-full h-[200px] rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <h2>{product.title}</h2>
                <p>
                  <span>${product.price}</span>
                </p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="flex justify-center items-center border border-slate-200 p-2 rounded-lg w-[calc(40%-1rem)] mx-auto mt-3 bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-700  text-slate-100 dark:hover:text-slate-200 transition-colors duration-300"
              >
                <IconAddToCart />
              </button>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

export default Products;
