import { useEffect, useState } from "react";
import { getProducts } from "../services/http";

export const List = ({ o }) => {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const handleCheckChange = async (e) => {
    const lineaFilter = e.target.value
    const products = await getProducts(lineaFilter !== "0" ? lineaFilter : undefined );
    setProducts(products);
  };

  const handleClick = async (producto) => {
    o(producto);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div>
        <select onChange={handleCheckChange} class="form-select" aria-label="Default select example">
          <option value="0" selected>Filtre por linea</option>
          <option value="LINEA CALOR">Calor</option>
          <option value="LINEA VENTILACION">Ventilación</option>
        </select>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Categoría</th>
            <th scope="col">Nombre</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.attributes.categoria}</td>
              <td>{p.attributes.nombre}</td>
              <td>
                <button
                  onClick={async (e) => await handleClick(p)}
                  className="btn btn-primary"
                >
                  Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
