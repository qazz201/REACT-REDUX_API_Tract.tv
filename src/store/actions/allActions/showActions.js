export var showsFetchSuccess = successShowsData => {
  return {
    type: "SHOWS_FETCH_SUCCESS",
    successShowsData
  };
};
export var showsIsLoading = bool => {
  return {
    type: "SHOWS_IS_LOADING",
    showsIsLoading: bool
  };
};

export var showsHasError = bool => {
  return {
    type: "SHOWS_HAS_ERROR",
    showsHasError: bool
  };
};

