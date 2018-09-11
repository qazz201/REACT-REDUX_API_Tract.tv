var mainState = {
  initialRequest: "https://api.trakt.tv/shows/popular?extended=full",
  // apiKeyImage: "8d1f23e693489e22109871c84cd01437",
  shows: ["initialLendth"],
  showsImg: [],
  pageCount: "",
  showGenre: "",
  showsIsLoading: true,
  showsHasError: false

  /* searchShowParam: {
    showName: "",
    searchRequest: "https://api.trakt.tv/search/show?query="
  }*/
};

export var showReducer = (state = mainState, action) => {
  switch (action.type) {
    case "SHOWS_FETCH_SUCCESS":
      return {
        ...state,
        ...action.successShowsData
        //  shows: [...state.mainData.shows, ...action.showsData.shows]
      };

    case "SHOWS_IS_LOADING":
      return {
        ...state,
        showsIsLoading: action.showsIsLoading
      };
    case "SHOWS_HAS_ERROR":
      return {
        ...state,
        showsHasError: action.showsHasError
      };

    default:
      return state;
  }
};

//export default showReducer;
