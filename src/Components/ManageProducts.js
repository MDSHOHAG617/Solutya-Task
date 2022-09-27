import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("delete user with id", id);
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("Deleted");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  //handle admin access
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <p>manage all products :{products.length}</p>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>description</th>
              <th>price</th>
              <th>update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <th>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td> $ {product.price}</td>

                <td>
                  <Link
                    to={`/update/${product._id}`}
                    className="btn btn-success text-white"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  {users.map((user) => (
                    <div>
                      {user?.role === "admin" && (
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn bg-red-400 text-white border-none"
                        >
                          delete
                        </button>
                      )}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
