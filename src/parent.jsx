import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  render() {
    return (
      <div>
        Parent class
        <Child name="ahmed" />
      </div>
    );
  }
}
export default Parent;
