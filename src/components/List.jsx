import { useEffect, useState } from "react";
import { getProducts } from "../services/http";

export const List = ({o}) => {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const handleClick = async (producto) => {
    o(producto)
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
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
  );
};
