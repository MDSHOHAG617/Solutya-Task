import React from "react";

const Product = ({ product }) => {
  // console.log(product);
  const { name, image, description, price } = product;
  return (
    <div>
      <div class="card mx-auto w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="text-left">{description}</p>
          <div class="card-actions ">
            <button class="btn btn-secondary">$ {price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
