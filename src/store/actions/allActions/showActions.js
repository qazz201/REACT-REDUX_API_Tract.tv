//import { fetchShows } from "../../fetchData/fetchShows";

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

/*export var fetchShowsData = (urlRequest, typeOfRequest) => async dispatch => {
  dispatch(showsIsLoading(true));
  // console.log(urlRequest, "URL__ACTION");
  switch (typeOfRequest) {
    case "SEARCH":
      dispatch();
  }

  try {
    var showsData = await fetchShows(urlRequest);

    dispatch(showsFetchSuccess(showsData));
    console.log(showsData, "showsData from SHOWACTIONS");
  } catch (error) {
    dispatch(showsHasError(true));

    console.log(`ERROR:${error.message}`);
    throw new Error(`SOMETHING WRONG:ERROR:${error.message}`);
  }
  dispatch(showsIsLoading(false));
};
*/
