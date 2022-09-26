import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loader/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  //redirecting
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  if (error) {
    return (
      <div>
        <p className="text-red-400 ">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  // if (user) {
  // }
  return (
    <form className="mt-6">
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
          onClick={handleGoogleSignIn}
        >
          Login with google
        </button>
      </div>
    </form>
  );
};

export default Login;
