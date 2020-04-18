import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

// Mengimport Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// UTS
// import UTS from "./7-UTS/index";

// 8 - Global API
// import GlobalAPI from "./8-GlobalAPI/Praktikum/BlogPost/BlogPost";
import MahasiswaGlobalAPI from "./8-GlobalAPI/Tugas/containers/Mahasiswa";

ReactDOM.render(
  <React.StrictMode>
    <MahasiswaGlobalAPI />
  </React.StrictMode>,
  document.getElementById("content")
);

serviceWorker.unregister();
