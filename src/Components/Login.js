// import { getAuth } from "firebase/auth";
// import React, { useState } from "react";
// import app from "../firebase.init";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { useLocation, useNavigate } from "react-router-dom";
// import Loading from "./Loader/Loading";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const auth = getAuth(app);
//   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

//   //redirecting
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location?.state?.from?.pathname || "/";

//   const handleGoogleSignIn = () => {
//     signInWithGoogle().then(() => {
//       navigate(from, { replace: true });
//     });
//   };
//   if (error) {
//     return (
//       <div>
//         <p className="text-red-400 ">Error: {error.message}</p>
//       </div>
//     );
//   }
//   if (loading) {
//     return <Loading></Loading>;
//   }
//   // if (user) {
//   // }
//   return (
//     <form className="mt-6">
//       <div className="card-body w-96 h-72 mx-auto bg-secondary rounded-md">
//         {" "}
//         <h1 className="font-bold mb-2">please login</h1>
//         <input
//           className="w-80 mx-auto p-2"
//           type="email"
//           placeholder="Enter Email "
//           disabled
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="w-80  mx-auto p-2 rounded"
//           type="password"
//           disabled
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="font-bold">Login</button>
//         <button
//           className="mt-2 font-bold btn text-white"
//           onClick={handleGoogleSignIn}
//         >
//           Login with google
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
// import SocialLogin from "./SocialLogin/SocialLogin";
import app from "../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import invalidIcon from "../images/invalid.webp";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loader/Loading";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  // const handleEmail = (event) => {
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   const validEmail = emailRegex.test(event.target.value);
  //   if (validEmail) {
  //     setEmail(event.target.value);
  //     setError("");
  //   } else {
  //     setError("invalid Email !");
  //   }
  // };
  // const handlePassword = (event) => {
  //   const passwordRegex = /(?=.*?[#?!@$%^&*-])/;
  //   const validPassword = passwordRegex.test(event.target.value);
  //   if (validPassword) {
  //     setPassword(event.target.value);
  //     setError("");
  //   } else {
  //     setError("At least one special character");
  //   }
  // };

  //handle password reset
  // const handlePasswordReset = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       toast("Email sent!");
  //     })
  //     .catch((err) => {
  //       toast(err.message);
  //     });
  // };

  // const handleLogIn = (event) => {
  //   event.preventDefault();
  //   signInWithEmailAndPassword(email, password);
  // };

  return (
    <div className="">
      <form className="bg-sky-200 p-5">
        <h1 className="text-xl font-medium p-2">Please Login</h1>
        <input
          className="rounded border-none p-2 m-2 w-80"
          // onChange={handleEmail}
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
          // onChange={handlePassword}
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <p className="p-1 font-semibold text-sm ">
          New to Brain The Train?{" "}
          <Link
            to="/registration"
            className="p-2 text-blue-700 hover:text-red-600"
          >
            Please Register
          </Link>{" "}
        </p>
        
        <br />
        <button
          onClick={() => signInWithEmailAndPassword(email, password)}
          className="rounded border-2 p-2 font-medium m-2 w-80 hover:bg-white hover:text-blue-600"
        >
          Login
        </button>
        {hookError && (
          <div>
            <p className="text-red-500  font-bold">{hookError?.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
