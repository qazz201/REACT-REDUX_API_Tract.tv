import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";

import store from "./store";
import { fetchShowsData } from "./store/actions/actionCombiner";

import CreateTable from "./components/presentationalComponents/CreateTable";
//import TableHeader from "./components/presentationalComponents/TableHeader";

import PaginationShow from "./components/PaginationShow";
import SearchShow from "./components/SearchShow";
import TypeShowFilter from "./components/TypeShowFilter";
//import GenreShowFilter from "./components/GenreShowFilter";

import ErrorMsg from "./messages/ErrorMsg";
import GenreMsg from "./messages/GenreMsg";

import "./styles.css";

//console.log(store.getState(), "APP_STATE");

class App extends Component {
  componentWillMount() {
    console.log(this.props, "PROPS");
    this.props.fetchShowsData(this.props.initialRequest);
  }

  render() {
    var {
      initialRequest,
      shows,
      showsImg,
      pageCount,
      showGenre,
      showsIsLoading,
      searchShowRequest
    } = this.props;

    //var { searchShowRequest } = this.props.searchData;

    console.log(this.props, "APP_STATE");
    return (
      <div className="App">
        <SearchShow
          fetchShowsData={this.props.fetchShowsData}
          searchRequest={searchShowRequest}
        />

        <TypeShowFilter fetchShowsData={this.props.fetchShowsData} />

        <PaginationShow
          initialRequest={initialRequest}
          fetchShowsData={this.props.fetchShowsData}
          pageCount={pageCount}
        />

        {showGenre && <GenreMsg showGenre={showGenre} />}

        {showsIsLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <CreateTable
            initialRequest={initialRequest}
            fetchShowsData={this.props.fetchShowsData}
            shows={shows}
            showsImg={showsImg}
          />
        )}

        {shows.length === 0 && <ErrorMsg />}
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    ...state.showData,
    ...state.searchData,
    ...state.showsType,
    ...state.showsGenre
  };
};

var mapDispatchToProps = dispatch => {
  return {
    fetchShowsData: bindActionCreators(fetchShowsData, dispatch)
    //fetchShowsData: (url) => dispatch(fetchShowsData(url))
    // dataIsLoading: bindActionCreators(dataIsLoading, dispatch)
  };
};

var WrappedAPP = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <WrappedAPP />
  </Provider>,
  rootElement
);
