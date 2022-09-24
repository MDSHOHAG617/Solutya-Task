import React from "react";

const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const image = event.target.image.value;

    const product = {
      name,
      description,
      price,
      image,
    };
    // sending data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Product added successfully");
        event.target.reset();
      });
  };
  return (
    <div className="mt-6">
      <form onSubmit={handleAddProduct}>
        <div className="card-body rounded-lg bg-secondary w-96 mx-auto">
          {" "}
          <h2 className="text-xl font-bold ">Please add products</h2>
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
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
