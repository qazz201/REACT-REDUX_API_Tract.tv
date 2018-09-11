export var typeShowReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_GLOBAL_TYPE_SHOW_HREF":
      return {
        ...state,
        initialRequest: action.typeShowHref
      };

    default:
      return state;
  }
};

//export default searchReducer;
