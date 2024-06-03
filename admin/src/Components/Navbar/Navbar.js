/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import userlogo from "../../assets/userlogo.jpeg";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex flex-row p-5 md:flex-row items-center">
        <div
          className="inline-flex items-center text-xl font-extrabold md:text-3xl mx-4"
          aria-label="logo"
        >
          <span className="text-red-500 title1">Trend</span>
          <span className="text-slate-900 title2">Hub</span>
        </div>
        <div className="ml-auto w-12">
          <img src={userlogo} alt="" />
        </div>
      </div>
      <hr className="border-red-300 mx-2" />
    </header>
  );
};

export default Navbar;
