import React from "react";

const AppHeading = (props) => {
  return (
    <div>
      <h1 className="text-5xl border-l-4 pl-4 font-bold border-green-300">
        {props.userName}
      </h1>
      <button
        className="border border-gray-400 rounded p-2"
        onClick={props.handleClick}
      >
        Change user
      </button>
    </div>
  );
};

export default AppHeading;
