var mainState = {
  initialRequest:
    "https://api.trakt.tv/shows/popular?extended=full&page=1&limit=10",

  // apiKeyImage: "8d1f23e693489e22109871c84cd01437",
  shows: ["initLength"],
  showsImg: [],
  pageCount: "",
  showGenre: "",
  showsIsLoading: true,
  showsHasError: false
};

var showReducer = (state = mainState, action) => {
  switch (action.type) {
    case "SHOWS_FETCH_SUCCESS":
      return {
        ...state,
        ...action.showsData
      };

    default:
      return state;
  }
};

export default showReducer;
