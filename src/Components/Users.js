import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://solutya-task-server-17uf.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>all users: {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>user ID</th>
              <th>make Admin</th>
              <th>make Editor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
