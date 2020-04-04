import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Component } from 'react';

class UTS extends Component {
    state = {
        listProduk: [],
        keranjang: []
    }

    componentDidMount() {
        fetch('http://localhost:3002/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })

        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    keranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    Navbar() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/#">Toko Asing</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/">
                            <a class="nav-item nav-link" href="/">Home</a>
                        </Link>
                        <Link to="/produk">
                            <a class="nav-item nav-link" href="/produk">List Produk</a>
                        </Link>
                        <Link to="/keranjang">
                            <a class="nav-item nav-link" href="/keranjang">Keranjang</a>
                        </Link>
                        <Link to="/about">
                            <a class="nav-item nav-link" href="/about">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }

    Home() {
        return (
            <div className="mt-4">
                <h1 className="text-center">Selamat Datang di Toko Asing</h1>
                <h3 className="text-center">Yang Jual Orang Asing</h3>
            </div>
        )
    }

    About() {
        return (
            <div className="mt-4">
                <h1 className="text-center">Nama Saya adalah ......</h1>
                <h3 className="text-center">NIM : 174172xxxx</h3>
            </div>
        )
    }

    listProduk() {
        return (
            <div class="col-lg-12">
                <div class="container">
                    <div class="row">
                        {this.Produk()}
                    </div>
                </div>
            </div>
        )
    }

    Produk() {
        return (
            this.state.listProduk.map(produk => {
                return (
                    <div class="col-sm-4 my-3">
                        <div class="card">
                            <img class="card-img-top h-50 img-fluid" src={produk.gambar} alt="Card image cap" />
                            <div class="card-block p-3">
                                <h4 class="card-title">{produk.nama}</h4>
                                <p class="card-text">Rp. {produk.harga}</p>
                                <p class="card-text"><small class="text-muted">Stok : {produk.stok}</small></p>
                                <button type="button" class="btn btn-primary btn-block">Tuku o</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    listKeranjang() {
        return (
            <div class="col-lg-12">
                <div class="container-fluid">
                    <div class="row">
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">ID Produk</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.Keranjang()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    Keranjang() {
        return (
            this.state.keranjang.map(keranjang => {
                return (
                    <tr>
                        <th scope="row">{keranjang.id}</th>
                        <td>{keranjang.nama}</td>
                        <td>{keranjang.harga}</td>
                        <td>{keranjang.qty}</td>
                    </tr>
                )
            })
        )
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            {this.Navbar()}
                            <Switch>
                                <Route exact path="/">
                                    {this.Home()}
                                </Route>
                                <Route exact path="/about">
                                    {this.About()}
                                </Route>
                                <Route exact path="/produk">
                                    {this.listProduk()}
                                </Route>
                                <Route exact path="/keranjang">
                                    {this.listKeranjang()}
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default UTS;