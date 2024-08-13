import React from "react";

const Sidebar = ({ handlePage }) => {
  return (
    <div className="w-52 border-r h-full">
      <ul>
        <li
          className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer"
          onClick={() => handlePage("home")}
        >
          Home
        </li>
        <li
          className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer"
          onClick={() => handlePage("employee")}
        >
          Employees
        </li>
        <li
          className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer"
          onClick={() => handlePage("picture")}
        >
          Pictures
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
