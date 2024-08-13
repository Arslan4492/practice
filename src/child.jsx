import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child class</h1>
        <h1>My name is {this.props.name}</h1>
      </div>
    );
  }
}
export default Child;
