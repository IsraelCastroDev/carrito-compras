import { useId } from "react";
import { useCart } from "../hooks/useCart";
import { IconCart } from "./Icons/IconCart";
import { IconDeleteFromCart } from "./Icons/IconDeleteFromCart";
import IconPlus from "./Icons/IconPlus";
import IconMinus from "./Icons/IconMinus";
import "./Cart.css";

function Cart() {
  const cartId = useId();
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } =
    useCart();

  return (
    <section>
      <label
        htmlFor={cartId}
        className="flex justify-center items-center rounded-full h-12 w-12 bg-sky-700  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out fixed bottom-4 right-4 z-20"
      >
        <IconCart />
      </label>

      <input type="checkbox" id={cartId} hidden />

      <aside className="translate-x-[100%] fixed bottom-0 right-0 w-[80%] md:w-[20rem] z-10  h-full bg-slate-700 transition-transform duration-300 ease-in-out">
        <p className="text-center font-semibold border-2 border-transparent border-b-slate-300 py-2">
          {cart.length === 0
            ? "Tu carrito esta vacío."
            : `Tienes (${cart.length} productos) agregados`}
        </p>

        <ul className="flex flex-col gap-y-4 p-5 h-[calc(100vh-10rem)] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center font-semibold">
              Aquí aparecerán tus productos agregados
            </p>
          ) : (
            <>
              {cart.map((product) => (
                <li key={product.id} className="bg-black p-2 rounded-lg">
                  <img
                    src={product.image}
                    alt={`Imagen de ${product.title}`}
                    className="block w-full overflow-hidden h-[200px] rounded-lg"
                  />
                  <p className="font-semibold">{product.title}</p>

                  <div className="flex flex-row-reverse items-center justify-between my-2">
                    <p>${product.price}</p>
                    <p className="flex items-center gap-x-3">
                      <button onClick={() => decreaseQuantity(product.id)}>
                        <IconMinus />
                      </button>
                      <span className="font-black">{product.quantity}</span>
                      <button onClick={() => addToCart(product)}>
                        <IconPlus />
                      </button>
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="flex justify-center items-center border border-slate-300 p-2 my-2 w-[calc(25%-1rem)] mx-auto rounded-lg hover:bg-slate-700 hover:text-slate-200 transition-colors duration-300"
                  >
                    <IconDeleteFromCart />
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-black flex justify-center items-center border border-slate-200 p-2 rounded-lg w-[calc(25%-1rem)] mx-auto mt-3 hover:bg-slate-700 hover:text-slate-200 transition-colors duration-300"
          >
            <IconDeleteFromCart />
          </button>
        )}
      </aside>
    </section>
  );
}

export default Cart;
