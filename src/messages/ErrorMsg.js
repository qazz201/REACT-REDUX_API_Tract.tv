import React, { Component } from "react";

class ErrorMsg extends Component {
  render() {
    return (
      <div
        style={{
          left: 0,
          right: 0,
          margin: "auto",
          textAlign: "center"
        }}
      >
        <h1>We have nothing to show you :(</h1>
      </div>
    );
  }
}

export default ErrorMsg;
