import React from "react";
import ReactDOM from "react-dom";

// Mengimport Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Redux
import { createStore, compose } from "redux";
import MainReducer from "./Redux/Reducers/MainReducer";

// Main App
import App from "./Redux/Containers/Table";
import registerServiceWorker from "./registerServiceWorker";
