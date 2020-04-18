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
// import MahasiswaGlobalAPI from "./8-GlobalAPI/Tugas/containers/Mahasiswa";

// 9 - Firebase
import FirebaseReactJS from "./9-FirebaseReactJS/index";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseReactJS />
  </React.StrictMode>,
  document.getElementById("content")
);

serviceWorker.unregister();
