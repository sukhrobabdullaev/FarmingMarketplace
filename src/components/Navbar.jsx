import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <div className="fixed z-10 border border-red-200 rounded-full py-2 px-4 mt-4 flex items-center justify-between bg-white w-3/4">
        <img src="./img/logo.png" alt="logo" width={50} />
        <div className="flex gap-4 font-semibold">
          <Link element={<Home />} to="/">
            Home
          </Link>
          <Link to="/chemicals">Chemicals</Link>
          <Link to="/farming">Farming</Link>
          <Link
            className="text-orange-500 hover:text-orange-300 "
            to="/signUp"
          >
            Sign Up
          </Link>
          <Link className="text-orange-500 hover:text-orange-300" to="/signIn">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
