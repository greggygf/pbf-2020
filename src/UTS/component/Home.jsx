import React from 'react';
import { Component } from 'react';
import img from '../img/louis-hansel-shotsoflouis-CvLZ6hbIemI-unsplash.jpg'

import '../css/Style.css';

class Home extends Component {
    render() {
        return (
            <div className="mt-4">
                <img src={img} alt="PhotoByLouisHansel@shotsoflouisOnUnsplash" width="100%" height="200px" className="mb-5"></img>
                <h1 className="text-center">Selamat Datang di Toko Rice Cooker</h1>
                <h5 className="text-center">gambarnya enak bukan? makanya beli rice cooker disini!</h5>
            </div>
        )
    }
}

export default Home;