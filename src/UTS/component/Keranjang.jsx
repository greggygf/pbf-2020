import React from 'react';
import { Component } from 'react';

<<<<<<< HEAD
import '../css/Style.css';


var total, subtotal;
=======
var total = 0;
var subtotal = 0;
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928

class Keranjang extends Component {
    state = {
        keranjang: []
    }

    componentDidMount() {
        this.ambilDataKeranjang();
    }

    ambilDataKeranjang = () => {
<<<<<<< HEAD
        fetch('http://localhost:3002/keranjang')
=======
        fetch('http://localhost:3002/posts')
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    keranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    listKeranjang() {
<<<<<<< HEAD
        total = 0
        subtotal = 0
=======
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
        return (
            this.state.keranjang.map(keranjang => {
                subtotal = keranjang.harga * keranjang.qty
                total = total + (keranjang.harga * keranjang.qty)
                return (
                    <tr>
                        <th scope="row">{keranjang.id}</th>
                        <td>{keranjang.nama}</td>
                        <td>Rp.{keranjang.harga},-</td>
                        <td>{keranjang.qty}</td>
                        <td>Rp.{subtotal},-</td>
                    </tr>
                )
            })
        )
    }

    render() {
        return (
            <div class="col-lg-12">
                <div class="container-fluid">
                    <div class="row">
                        <table class="table mt-3 table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.listKeranjang()}
                            </tbody>
                            <tfoot className="font-weight-bold text-white bg-dark">
                                <td className="text-center" colSpan='4'>Total</td>
                                <td>Rp.{total},-</td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Keranjang;