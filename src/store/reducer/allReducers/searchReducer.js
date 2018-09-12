var searchShowParam = {
  ///showName: "",
  searchShowRequest: "https://api.trakt.tv/search/show?query="
};

export var searchReducer = (state = searchShowParam, action) => {
  switch (action.type) {
    case "SET_GLOBAL_SEARCH_HREF":
      return {
        ...state,
        initialRequest: action.searchHref
      };

    default:
      return state;
  }
};

//export default searchReducer;
