import React, { Component } from "react";

class ClassComponent extends Component {
  state = { number: 0 };
  componentDidMount() {
    this.setState({ number: 1 });
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <p>Class Component</p>
        <p>State is {number}</p>
      </div>
    );
  }
}
export default ClassComponent;
