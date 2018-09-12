import React, { Component } from "react";

class GenreMsg extends Component {
  render() {
    var { showGenre } = this.props;
    return (
      <h3
        style={{
          textAlign: "center",
          color: "rgba(209, 214, 214, 0.788)"
        }}
      >
        you have chosen genre:{" "}
        <code
          style={{
            fontSize: "1.5em",
            color: "rgba(0, 195, 255, 0.788)",
            borderBottom: "1px solid grey"
          }}
        >
          {" "}
          "{showGenre}"
        </code>
      </h3>
    );
  }
}

export default GenreMsg;
