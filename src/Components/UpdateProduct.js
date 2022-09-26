import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl mt-5">
        Update Product:{" "}
        <span className="uppercase text-green-400">{products.name}</span>
      </h1>
    </div>
  );
};

export default UpdateProduct;
