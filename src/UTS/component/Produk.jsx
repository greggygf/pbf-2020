import React from 'react';
import { Component } from 'react';

<<<<<<< HEAD
import '../css/Style.css';


class Produk extends Component {
    state = {
        listProduk: [],
        insertKeranjang: {
            idProduk: 1,
            nama: ""
        }
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3001/ricecooker')
=======
class Produk extends Component {
    state = {
        listProduk: []
    }

    ambilDataProduk = () => {
        fetch('http://localhost:3001/posts')
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataProduk();
    }

<<<<<<< HEAD
    handleTambahKeranjang = (event) => {
        let formInsertKeranjang = { ...this.state.insertKeranjang };
        let timestamp = new Date().getTime();
        formInsertKeranjang['idProduk'] = timestamp;
        formInsertKeranjang[event.target.name] = event.target.value;
        this.setState({
            insertKeranjang: formInsertKeranjang
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((response) => {
                alert('Berhasil!')
            });
    }

=======
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
    listProduk() {
        return (
            this.state.listProduk.map(produk => {
                return (
<<<<<<< HEAD
                    <div className="col-sm-4 my-3">
                        <div className="card">
                            <img className="mx-auto d-block img-fluid my-3" width='50%' src={produk.gambar} alt="Ricecooker" />
                            <div className="card-block p-3">
                                <h5 className="card-title">{produk.nama}</h5>
                                <h4 className="card-text text-info font-weight-bold">Rp. {produk.harga}</h4>
                                <p className="card-text"><small className="text-muted">Stok : {produk.stok}</small></p>
                                <button type="submit" className="btn btn-primary btn-block">Beli</button>
=======
                    <div class="col-sm-4 my-3">
                        <div class="card">
                            <img class="card-img-top h-50 img-fluid my-3" src={produk.gambar} alt="Card" />
                            <div class="card-block p-3">
                                <h5 class="card-title">{produk.nama}</h5>
                                <h4 class="card-text text-info font-weight-bold">{produk.harga}</h4>
                                <p class="card-text"><small class="text-muted">Stok : {produk.stok}</small></p>
                                <button type="submit" class="btn btn-primary btn-block">Beli</button>
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
=======
            <div class="col-lg-12">
                <div class="container">
                    <div class="row">
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
                        {this.listProduk()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Produk;