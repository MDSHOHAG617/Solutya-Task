import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `https://solutya-task-server-17uf.vercel.app/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //
  const handleUpdateProducts = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const image = event.target.image.value;

    const updatedProduct = {
      name,
      description,
      price,
      image,
    };
    // sending data to the server
    const url = `https://solutya-task-server-17uf.vercel.app/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Product added successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <h1 className="text-4xl mt-5">
        Update Product:{" "}
        <span className="uppercase text-green-400">{products.name}</span>
      </h1>

      <form onSubmit={handleUpdateProducts}>
        <div className="card-body rounded-lg bg-secondary w-96 mx-auto mt-10">
          {" "}
          <h2 className="text-xl font-bold ">Please Update products</h2>
          <input
            className="p-2 m-2 rounded w-80 mx-auto "
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="text"
            name="description"
            placeholder="description"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="p-2 m-2 rounded w-80 mx-auto"
            type="url"
            name="image"
            placeholder="Image url"
            required
          />
          <button className="btn p-2 m-2 text-white " type="submit">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
