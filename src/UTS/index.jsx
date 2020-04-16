import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Style.css';

import Home from './component/Home';
import About from './component/About';
import Keranjang from './component/Keranjang';
import Produk from './component/Produk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Component } from 'react';

class UTS extends Component {

    Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <a className="navbar-brand" href="/">Toko Rice Cooker - Mas Greggy</a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/">
                            <a className="nav-item nav-link" href="/">Home</a>
                        </Link>
                        <Link to="/produk">
                            <a className="nav-item nav-link" href="/produk">List Produk</a>
                        </Link>
                        <Link to="/keranjang">
                            <a className="nav-item nav-link" href="/keranjang">Keranjang</a>
                        </Link>
                        <Link to="/about">
                            <a className="nav-item nav-link" href="/about">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }

    render() {
        return (
            <Router>
                <div className="col-12">
                    {this.Navbar()}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/produk">
                            <Produk />
                        </Route>
                        <Route exact path="/keranjang">
                            <Keranjang />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default UTS;