import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";

import store from "./store";
import { fetchShowsData } from "./store/actions/showActions";

import "./styles.css";

//console.log(store.getState(), "APP_STATE");

class App extends Component {
  render() {
    console.log(this.props, "APP_STATE");
    return (
      <div className="App">
        <button
          onClick={() => this.props.fetchShowsData(this.props.initialRequest)}
        >
          LoadData : {this.props.isLoading ? "true" : "false"}
        </button>
        {this.props.isLoading ? (
          <React.Fragment>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    ...state
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
