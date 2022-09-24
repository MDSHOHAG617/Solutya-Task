import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p className="text-red-400 ">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    // return (
    //   <div>{user && <Navigate to="/dashboard" replace={true}></Navigate>}</div>
    // );
  }
  return (
    <form className="">
      <div className="card-body w-96 h-72 mx-auto bg-secondary rounded-md">
        {" "}
        <h1 className="font-bold mb-2">please login</h1>
        <input
          className="w-80 mx-auto p-2"
          type="email"
          placeholder="Enter Email "
          disabled
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-80  mx-auto p-2 rounded"
          type="password"
          disabled
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="font-bold">Login</button>
        <button
          className="mt-2 font-bold btn text-white"
          onClick={() => signInWithGoogle()}
        >
          Login with google
        </button>
      </div>
    </form>
  );
};

export default Login;
