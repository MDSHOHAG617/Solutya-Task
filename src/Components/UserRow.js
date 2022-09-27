import React from "react";

const UserRow = ({ user }) => {
  const { email, _id, role } = user;
  //make admin
  const makeAdmin = () => {
    // alert("Are you sure want to make admin?");

    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };}
    
  //make editor
  const makeEditor = () => {
    // alert("Are you sure want to make editor?");
    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){
      fetch(`http://localhost:5000/user/editor/${email}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    }
    

  return (
    <tr>
      <td>{email}</td>
      <td>{_id}</td>

      <td>
        {role === "admin" ? (
          <button className="text-pink-400">All ready an admin </button>
        ) : (
          <button onClick={makeAdmin} className="btn btn-primary text-white">
            make Admin
          </button>
        )}
      </td>
      <td>
        {role === "editor" ? (
          <button className="text-pink-400">All ready an Editor </button>
        ) : (
          <button onClick={makeEditor} className="btn btn-primary text-white">
            make Editor
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
