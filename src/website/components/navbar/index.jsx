import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 fixed top-0 bg-blue-400 w-full flex justify-between items-center px-3">
      Logo
      <img
        className="h-16 w-16 rounded-full"
        alt="avatar"
        src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
      />
    </div>
  );
};

export default Navbar;
