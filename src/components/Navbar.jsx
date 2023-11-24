import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <div className="absolute rounded-full py-2 px-4 mt-4 flex items-center justify-between bg-white w-3/4">
        <img src="./img/logo.png" alt="logo" width={50} />
        <div className="flex gap-4 font-semibold">
          <Link element={<Home />} to="./">
            Home
          </Link>
          <Link to="./">Chemicals</Link>
          <Link to="./">Farming</Link>
          <Link
            className="text-orange-500 hover:text-orange-300 "
            to="/signUp"
            element={<SignUp/>}
          >
            Sign Up
          </Link>
          <Link
            className="text-orange-500 hover:text-orange-300"
            to="/signIn"
            element={<SignIn />}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
