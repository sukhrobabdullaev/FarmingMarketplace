import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <div className="absolute rounded-full p-2 mt-4 flex items-center justify-between bg-white w-3/4">
        <img src="./img/logo.png" alt="logo" width={50} />
        <div className="flex gap-4 font-semibold">
          <NavLink element={<Home />} to="./">
            Home
          </NavLink>
          <NavLink to="./">Chemicals</NavLink>
          <NavLink to="./">Farming</NavLink>
          <NavLink className="text-orange-500 hover:text-orange-300 " to="./">
            Sign Up
          </NavLink>
          <NavLink className="text-orange-500 hover:text-orange-300" to="./">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
