import React, { useState } from "react";
import app from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loader/Loading";
import useToken from "./Hooks/useToken";

const Registration = () => {
  const auth = getAuth(app);
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);

  const token = useToken(user);
  //Replace by using navigate & location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }

  //send user to useToken

  //   const handleEmail = (event) => {
  //     const emailRegex = /\S+@\S+\.\S+/;
  //     const validEmail = emailRegex.test(event.target.value);
  //     if (validEmail) {
  //       setEmail(event.target.value);
  //       setError("");
  //     } else {
  //       setError("invalid Email !");
  //     }
  //   };

  //   const handlePassword = (event) => {
  //     const passwordRegex = /(?=.*?[#?!@$%^&*-])/;
  //     const validPassword = passwordRegex.test(event.target.value);
  //     if (validPassword) {
  //       setPassword(event.target.value);
  //       setError("");
  //     } else {
  //       setError("At least one special character");
  //     }
  //   };
  //   const handleLogIn = (event) => {
  //     event.preventDefault();
  //     createUserWithEmailAndPassword(email, password);
  //     setName(event.target.value);
  //   };

  return (
    <div className="">
      <form className="bg-sky-200 p-5">
        <h1 className="text-xl font-medium p-2">Please Register</h1>

        <input
          className="rounded border-none p-2 m-2 w-80"
          required
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
        />
        <br />
        <input
          className="rounded border-none p-2 m-2 w-80"
          //   onChange={handleEmail}
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <br />
        <input
          className="rounded border-none p-2 m-2 w-80"
          //   onChange={handlePassword}
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <p className="p-1 font-semibold text-sm ">
          All ready registered?{" "}
          <Link to="/login" className="p-2 text-blue-700 hover:text-red-600">
            Please Login
          </Link>{" "}
        </p>

        <button
          onClick={() => createUserWithEmailAndPassword(email, password)}
          className="rounded border-2 p-2 font-medium m-2 w-80 hover:bg-white hover:text-blue-600"
        >
          Register
        </button>

        {/* {error && (
          <div>
            <img className="w-8 mx-auto m-1" src={invalidIcon} alt="" />
            <p className="text-red-500  font-bold">{error}</p>
          </div>
        )} */}
        {hookError && (
          <div>
            <p className="text-red-500  font-bold">{hookError?.message}</p>
          </div>
        )}
      </form>
      {/* <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Registration;
