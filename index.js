import React from "react";
import ReactDOM from "react-dom";

import Router from "./router";

class AppComponent extends React.Component {
  render() {
    return <Router />;
  }
}

const App = document.getElementById("app");

ReactDOM.render(<AppComponent />, App);
