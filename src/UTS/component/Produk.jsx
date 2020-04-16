import React from 'react';
import { Component } from 'react';

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

    listProduk() {
        return (
            this.state.listProduk.map(produk => {
                return (
                    <div className="col-sm-4 my-3">
                        <div className="card">
                            <img className="mx-auto d-block img-fluid my-3" width='50%' src={produk.gambar} alt="Ricecooker" />
                            <div className="card-block p-3">
                                <h5 className="card-title">{produk.nama}</h5>
                                <h4 className="card-text text-info font-weight-bold">Rp. {produk.harga}</h4>
                                <p className="card-text"><small className="text-muted">Stok : {produk.stok}</small></p>
                                <button type="submit" className="btn btn-primary btn-block">Beli</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="col-lg-12">
                <div className="container">
                    <div className="row">
                        {this.listProduk()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Produk;