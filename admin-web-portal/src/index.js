import React from "react";
import ReactDOM from "react-dom";

import Login from "./login";
import Support from "./Support_Admin";
import Finance from "./Finance_Admin"
import Sales from "./Sales_Admin"
import { BrowserRouter as Router } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/component-CSS/main.css";
import HR from "./HR"

ReactDOM.render(
    <Login />,
    document.getElementById("root")
);


