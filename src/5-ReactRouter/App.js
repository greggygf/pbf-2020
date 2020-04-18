import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, // URL Parameters
  useRouteMatch, // Nesting Router

  // Auth
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import dzikirpagipetang from "./img/tugas-praktikum-5/dzikir-pagi-petang.jpg";

import sebaikbaikamal from "./img/tugas-praktikum-5/sebaik-baik-amal-adalah-shalat.jpg";

import sifatshalat from "./img/tugas-praktikum-5/sifat-shalat-nabi.jpg";

import doahariananak from "./img/tugas-praktikum-5/doa-harian-anak.jpg";

import hafalanjuzamma from "./img/tugas-praktikum-5/hafalan-juz-amma.jpg";

import muliadenganmanhajsalaf from "./img/tugas-praktikum-5/mulia-dengan-manhaj-salaf.jpg";

import duniabangkaikambing from "./img/tugas-praktikum-5/dunia-adalah-bangkai-kambing.jpg";

export default function Home() {
  return (
    <Router>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <a class="navbar-brand" href="/public">
            Toko Buku Islam
          </a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/public">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/private">
                  <a class="nav-link">Buku</a>
                </Link>
              </li>
            </ul>
            <AuthButton />
          </div>
        </nav>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <AlertLoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/private/Aqidah" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return fakeAuth.isAuthenticated ? (
    <button
      class="btn btn-outline-danger my-2 my-sm-0"
      onClick={() => {
        fakeAuth.signout(() => history.push("/public"));
      }}
    >
      Sign Out
    </button>
  ) : (
    <button class="btn btn-outline-primary my-2 my-sm-0" onClick={login}>
      Login
    </button>
  );
}

// Pembungkus untuk <Route> yang mmengarahkan ke login
// tampilan jika anda belum terkonfirmasi.

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3 class="text-center mt-5">Selamat Datang di Toko Buku Islam!</h3>;
}

function ProtectedPage() {
  return <KategoriBuku />;
}

function AlertLoginPage() {
  return <h3 class="text-center mt-5">Login Dulu!</h3>;
}

function KategoriBuku() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to={`${url}/Aqidah`}>
          <button class="btn btn-outline-primary my-2 my-sm-0 mr-2">
            Aqidah
          </button>
        </Link>
        <br />
        <br />
        <Link to={`${url}/Anak`}>
          <button class="btn btn-outline-info my-2 my-sm-0 mr-2">Anak</button>
        </Link>
        <br />
        <br />
        <Link to={`${url}/Fiqih`}>
          <button class="btn btn-outline-success my-2 my-sm-0">Fiqih</button>
        </Link>
      </div>
      <br />
      <br />
      <Switch>
        <Route path={`${path}/:kategoriId`}>
          <Buku />
        </Route>
      </Switch>
    </div>
  );
}

function Buku() {
  let { kategoriId } = useParams();

  if (kategoriId === "Aqidah") {
    return (
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <img src={duniabangkaikambing} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">
              Dunia Lebih Jelek Daripada Bangkai Kambing
            </h5>
            <p class="card-text">Rp.50.000</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src={muliadenganmanhajsalaf} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Mulia dengan Manhaj Salaf</h5>
            <p class="card-text">Rp.150.000</p>
          </div>
        </div>
      </div>
    );
  } else if (kategoriId === "Fiqih") {
    return (
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <img src={dzikirpagipetang} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Dzikir Pagi Petang</h5>
            <p class="card-text">Rp.16.000</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src={sebaikbaikamal} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Sebaik Baik Amal Adalah Shalat</h5>
            <p class="card-text">Rp.32.000</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src={sifatshalat} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Sifat Shalat Nabi</h5>
            <p class="card-text">Rp.45.000</p>
          </div>
        </div>
      </div>
    );
  } else if (kategoriId === "Anak") {
    return (
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <img src={hafalanjuzamma} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Tuntunan Hafalan Juz Amma Jilid 1</h5>
            <p class="card-text">Rp.15.000</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <img src={doahariananak} class="w-100 mb-3" alt="Logo" />
            <h5 class="card-title">Tuntunan Do'a Harian</h5>
            <p class="card-text">Rp.15.000</p>
          </div>
        </div>
      </div>
    );
  }
}
