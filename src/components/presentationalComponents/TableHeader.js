import React, { Component } from "react";

import GenreShowFilter from "../GenreShowFilter";

class TableHeader extends Component {
  render() {
    var heder = ["№", "Image", "Title", "Genre", "Seasons", "Year", "Country"];

    var { initialRequest, fetchShowsData } = this.props;

    var th = heder.map(elem => {
      if (elem === "Genre") {
        return (
          <th className="tableGenre">
            {/* {elem}&nbsp;*/}
            <GenreShowFilter
              initialRequest={initialRequest}
              fetchShowsData={fetchShowsData}
            />
          </th>
        );
      }
      return <th>{elem}</th>;
    });
    return <thead>{th}</thead>;
  }
}

export default TableHeader;
