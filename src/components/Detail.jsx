import { useEffect, useState } from "react";
import { getProduct } from "../services/http";

export const Detail = ({ p, o }) => {
  const [product, setProduct] = useState();
  const handleBackClick = () => o(null);
  const handleDetailLoad = async () => {
    const searchProduct = await getProduct(p.id);
    setProduct(searchProduct);
  };

  useEffect(() => {
    handleDetailLoad();
  }, []);

  return (
    <div className="m-5">
      <h1>{product?.attributes.nombre}</h1>
      <div className="row my-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide col-12 col-md-8"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            {product?.attributes.imagenes.data?.map(({attributes: {formats:{small:{url, name, hash}}}},index)=> 
              <div key={hash} className={`carousel-item ${index === 0 ? "active" : ""}`} >
              <img
                height={"500px"}
                src={url}
                className="d-block w-100"
                alt={name}
              />
            </div>
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="col-12 col-md-4">
          <h4>{product?.attributes.categoria}</h4>
        </div>
      </div>

      <button onClick={handleBackClick} className="btn btn-primary my-3">
        Volver
      </button>
    </div>
  );
};
