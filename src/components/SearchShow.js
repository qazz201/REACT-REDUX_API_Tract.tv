import React, { Component } from "react";

class SearchShow extends Component {
  showName = "";

  setShowName = event => {
    this.showName = event.target.value.trim();
    // console.log(this.showName);
  };

  findShow = () => {
   
    this.showName &&
      this.props.fetchShowsData(
        `${this.props.searchRequest}${this.showName}&extended=full`,
        "SEARCH_TYPE"
      );
  };

  render() {
    return (
      <div className="searchInput">
        <input
          type="search"
          className="searchShowInput"
          onInput={this.setShowName}
          placeholder="Find your Show"
        />
        <button className="searchButton " onClick={this.findShow}>
          <svg>
            <use href="#search" />
          </svg>
        </button>
      </div>
    );
  }
}

export default SearchShow;
