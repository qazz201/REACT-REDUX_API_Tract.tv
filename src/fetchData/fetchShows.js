import { fetchImg } from "./fetchImg";

var dataSendingToTable = {
  pageCount: "",
  shows: [],
  showsImg: []
};

var requestProps = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key":
      "78cc10532d459b67e34f0d2ff41daf47df1178cafd5e8885d6dc31dbcafd855c"
  }
};

export var fetchShows = async initialRequest => {
  try {
    var response = await fetch(initialRequest, requestProps);
    var pageCount = response.headers.get("X-Pagination-Page-Count");
    var body = await response.json();

    //console.log(body, "INITIAL");
    var showId = [];

    showId = body.map(elem => {
      if (elem.thetvdb_id) {
        return elem.thetvdb_id;
      } else if (elem.show) {
        return elem.show.ids.tvdb;
      } else {
        return elem.ids.tvdb;
      }
    });
    // console.log(showId, "SHOW ID");

    dataSendingToTable = {
      ...dataSendingToTable,
      pageCount: pageCount,
      shows: body
    };

    return fetchImg(showId, dataSendingToTable);
  } catch (error) {
    console.log(`ERROR:${error.message}`);
    throw new Error(`SOMETHING WRONG:ERROR:${error.message}`);
  }
};
