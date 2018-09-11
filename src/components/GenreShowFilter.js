import React, { Component } from "react";

class GenreShowFilter extends Component {
  genres = {
    action: "&genres=action",
    comedy: "&genres=comedy",
    drama: "&genres=drama",
    crime: "&genres=crime",
    fantasy: "&genres=fantasy",
    adventure: "&genres=adventure",
    thriller: "&genres=thriller",
    mystery: "&genres=mystery",
    horror: "&genres=horror"
  };

  filterHrefs = event => {
    var genreName =
      event.currentTarget[event.currentTarget.selectedIndex].innerText;

    this.props.fetchShowsData(
      event.currentTarget.value,
      "CHOOSE_GENRE_SHOW",
      genreName
    );
  };

  render() {
    var hrefForGenre = this.props.initialRequest;

    //console.log(this.props.initialRequest, "FROM GENRE FILTER");

    return (
      <select className="GenreFilter" onInput={this.filterHrefs}>
        <option value="" disabled selected>
          Choose Genre
        </option>
        <option value={`${hrefForGenre}${this.genres.action}`}>Action</option>
        <option value={`${hrefForGenre}${this.genres.comedy}`}>Comedy</option>
        <option value={`${hrefForGenre}${this.genres.drama}`}>Drama</option>
        <option value={`${hrefForGenre}${this.genres.crime}`}>Crime</option>
        <option value={`${hrefForGenre}${this.genres.fantasy}`}>Fantasy</option>
        <option value={`${hrefForGenre}${this.genres.adventure}`}>
          Adventure
        </option>
        <option value={`${hrefForGenre}${this.genres.thriller}`}>
          Thriller
        </option>
        <option value={`${hrefForGenre}${this.genres.mystery}`}>Mystery</option>
        <option value={`${hrefForGenre}${this.genres.horror}`}>Horror</option>
      </select>
    );
  }
}

export default GenreShowFilter;
