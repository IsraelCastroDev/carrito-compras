import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

function Filters() {
  const minPriceId = useId();
  const categoryId = useId();

  const contextFilters = useFilters();

  const { filters, setFilters } = contextFilters;

  const handleOnChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3">
          <label htmlFor={minPriceId} className="font-semibold">
            Precio Mínimo:
          </label>
          <input
            type="range"
            name="minPrice"
            id={minPriceId}
            min={0}
            max={900}
            onChange={handleOnChange}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>

        <div className="flex items-center gap-x-3">
          <label htmlFor={categoryId} className="font-semibold">
            Categorías:
          </label>
          <select
            name="category"
            id={categoryId}
            className="bg-white dark:bg-slate-700 dark:outline-gray-900 border border-slate-300 p-1 rounded-lg"
            onChange={handleOnChange}
            value={filters.category}
          >
            <option value="all">Todas</option>
            <option value="electronics">Electrónicos</option>
            <option value="jewelery">Joyas</option>
            <option value="men's clothing">Ropa de Hombre</option>
            <option value="women's clothing">Ropa de Mujer</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default Filters;
