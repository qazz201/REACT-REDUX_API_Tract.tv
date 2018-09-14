import React, { Component } from "react";

//import Pagination from "../Pagination/Pagination.js";

class TypeShowFilter extends Component {
  showType = {
    popular: "https://api.trakt.tv/shows/popular?extended=full",
    trending: "https://api.trakt.tv/shows/trending?extended=full",
    played: "https://api.trakt.tv/shows/played/weekly?extended=full",
    watched: "https://api.trakt.tv/shows/watched/all?extended=full",
    anticipated: "https://api.trakt.tv/shows/anticipated?extended=full"
  };

  changeShowType = event => {
    this.props.fetchShowsData(event.target.value, "CHOOSE_TYPE_SHOW");
  };

  render() {
   // var sendRequest = this.props.sendRequest;
    return (
      <select className="showFilter" onInput={this.changeShowType}>
        <option value="" disabled selected>
          Choose show type
        </option>
        <option value={this.showType.popular}>Most popular</option>
        <option value={this.showType.trending}>Most trending</option>
        <option value={this.showType.played}>Most played</option>
        <option value={this.showType.watched}>Most watched</option>
        <option value={this.showType.anticipated}>Most anticipated</option>
      </select>
    );
  }
}

export default TypeShowFilter;
