import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../firebase.init";
import logo from "../images/logo.png";

const Navbar = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  //signOut
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <div class="navbar lg:px-16 mt-2">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font-bold" to="/">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link className="font-bold" to="/products">
                  Products
                </Link>
              </li> */}
              <li>
                <Link className="font-bold" to="product/add">
                  Add Products
                </Link>
              </li>
              {user && (
                <li>
                  <Link className="font-bold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {user ? (
                <button
                  className="btn btn-sm bg-secondary border-none font-bold text-white"
                  onClick={logout}
                >
                  Log out
                </button>
              ) : (
                <li>
                  <Link
                    className="font-btn btn-sm bg-secondary border-none font-bold text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <p className="">
            <img className="w-28 lg:w-full" src={logo} alt="" />
          </p>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link className="font-bold" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="font-bold" to="/products">
                Products
              </Link>
            </li> */}
            <li>
              <Link className="font-bold" to="product/add">
                Add Products
              </Link>
            </li>
            {user && (
              <li>
                <Link className="font-bold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            {user ? (
              <button className="font-bold" onClick={logout}>
                Log out
              </button>
            ) : (
              <li>
                <Link className="font-bold" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div class="navbar-end">
          <button className="text-white font-bold btn-sm rounded-full  lg:btn-md  btn-secondary">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
