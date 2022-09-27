import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import app from "../firebase.init";

const UserRow = ({ user }) => {
  const { email, _id, role } = user;
const auth =getAuth(app)

  //current user
  const [currentUser, loading, error] = useAuthState(auth);
  //make admin
  const makeAdmin = () => {
    // alert("Are you sure want to make admin?");

    const proceed = window.confirm("Are you sure you want to delete?");
    if(proceed){fetch(`https://solutya-task-server-17uf.vercel.app/user/admin/${email}`, {
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
      fetch(`https://solutya-task-server-17uf.vercel.app/user/editor/${email}`, {
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
        
      <div className="div">{role === "admin" ? (
        <button className="text-pink-400">All ready an admin </button>
      ) : (
        <button onClick={makeAdmin} className="btn btn-primary text-white">
          make Admin
        </button>
      )}</div>
      
      
      
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
