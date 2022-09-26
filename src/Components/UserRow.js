import { isAdmin } from "@firebase/util";
import React from "react";

const UserRow = ({ user }) => {
  const { email, _id, role } = user;

  const makeAdmin = () => {
    alert("Are you sure want to make admin?");
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr>
      <td>{email}</td>
      <td>{_id}</td>
      <td>
        {role === "admin" ? (
          <button className="text-pink-400">all ready an admin </button>
        ) : (
          <button onClick={makeAdmin} className="btn btn-primary text-white">
            make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
