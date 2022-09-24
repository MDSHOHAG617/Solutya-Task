import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

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
    return (
      <div>{user && <Navigate to="/dashboard" replace={true}></Navigate>}</div>
    );
  }
  return (
    <div className="App">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signInWithGoogle()}>Login</button>
    </div>
  );
};

export default Login;
