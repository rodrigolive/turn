"use strict";

import { hot } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import "antd/dist/antd.css";
import "./app.less";

import Main from "./main.jsx";

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default hot(module)(App);
