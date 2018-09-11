export var genreShowReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_GLOBAL_GENRE_SHOW_HREF":
      return {
        ...state,
        initialRequest: action.genreShowHref,
        showGenre: action.showGenreName
      };

    default:
      return state;
  }
};
