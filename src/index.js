import React from "react";
import ReactDOM from "react-dom";

// Mengimport Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// UTS
import UTS from "./7-UTS/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <UTS />
  </React.StrictMode>,
  document.getElementById("content")
);

serviceWorker.unregister();
