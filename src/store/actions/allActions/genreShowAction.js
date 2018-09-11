export var genreShowHref = (genreShowHref, showGenreName) => {
  return {
    type: "SET_GLOBAL_GENRE_SHOW_HREF",
    genreShowHref,
    showGenreName
  };
};
