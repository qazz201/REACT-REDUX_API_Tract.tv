import { fetchShows } from "../../fetchData/fetchShows";

export var showsFetchSuccess = showsData => {
  return {
    type: "SHOWS_FETCH_SUCCESS",
    showsData
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

export var fetchShowsData = urlRequest => async dispatch => {
  dispatch(showsIsLoading(true));

  try {
    var showsData = await fetchShows(urlRequest);
    dispatch(showsFetchSuccess(showsData));
    console.log(showsData, "showsData from SHOWACTIONS");
  } catch (error) {
    dispatch(showsHasError(true));
  }
  dispatch(showsIsLoading(false));
};
