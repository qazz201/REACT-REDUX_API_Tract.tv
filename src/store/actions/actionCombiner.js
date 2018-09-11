import { fetchShows } from "../../fetchData/fetchShows";
import { searchHref } from "./allActions/searchActions";
import { typeShowHref } from "./allActions/typeShowActions";
import { genreShowHref } from "./allActions/genreShowAction";

import {
  showsFetchSuccess,
  showsIsLoading,
  showsHasError
} from "./allActions/showActions";

export var fetchShowsData = (
  urlRequest,
  typeOfRequest,
  showGenreName
) => async dispatch => {
  dispatch(showsIsLoading(true));

  //Changing initialRequest in global store
  //depending on incoming urlRequest
  switch (typeOfRequest) {
    case "SEARCH_TYPE":
      dispatch(searchHref(urlRequest));
    case "CHOOSE_TYPE_SHOW":
      dispatch(typeShowHref(urlRequest));
    case "CHOOSE_GENRE_SHOW":
      dispatch(genreShowHref(urlRequest, showGenreName));
  }

  try {
    var showsData = await fetchShows(urlRequest);
    dispatch(showsFetchSuccess(showsData));

    console.log(showsData, "showsData from ACTION_COMBINER");
  } catch (error) {
    dispatch(showsHasError(true));

    console.error(`ERROR:${error.message}`);
    throw new Error(`SOMETHING WRONG:ERROR:${error.message}`);
  }
  dispatch(showsIsLoading(false));

  console.log(urlRequest, "URL__ACTION_COMBINER");
};
