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

    var showsData = [];
    var showId = [];

    showId = body.map(elem => {
      showsData.push(elem.show ? elem.show : elem);
      // console.log(elem.show ? elem.show : elem, "INITIAL");

      if (elem.thetvdb_id) {
        return elem.thetvdb_id;
      } else if (elem.show) {
        return elem.show.ids.tvdb;
      } else {
        return elem.ids.tvdb;
      }
    });
  
    dataSendingToTable = {
      ...dataSendingToTable,
      pageCount: pageCount,
      shows: showsData
    };

    return fetchImg(showId, dataSendingToTable);
  } catch (error) {
    console.log(`ERROR:${error.message}`);
    throw new Error(`SOMETHING WRONG:ERROR:${error.message}`);
  }
};
