import React from 'react';
import { Component } from 'react';

<<<<<<< HEAD
import '../css/Style.css';

import dp from '../img/dp.jpg'


class About extends Component {
    render() {
        return (
            <div className="mt-4 text-center">
                <img src={dp} width='15%' alt="fotoprofil" className="my-5 rounded-circle"></img>
                <h1>Greggy Gianini Firmansyah</h1>
                <h3>TI-3F / 09 / 1741720088</h3>
=======
class About extends Component {
    render() {
        return (
            <div className="mt-4">
                <h1 className="text-center">Nama Saya adalah ......</h1>
                <h3 className="text-center">NIM : 174172xxxx</h3>
>>>>>>> f5bb38bfbd776760971b1acd66704f2fe8ea5928
            </div>
        )
    }
}

export default About;