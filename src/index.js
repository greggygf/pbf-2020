import React from 'react';
import ReactDOM from 'react-dom';

// Mengimport Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Redux
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import MainReducer from './reducers/MainReducer'

// Main App
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>
f)(createStore)(MainReducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content'));

// ReactDOM.render(< App />, document.getElementById('content'));

serviceWorker.unregister();


// import HelloComponent from './component/HelloComponent';
// import LoginComponent from './component/LoginComponent';
// import StatefullComponent from './container/StatefullComponent';

// import BlogPost from './container/BlogPost/BlogPost';
// import Mahasiswa from './container/Mahasiswa/Mahasiswa';

// function HelloWord()
// {
//     return <p> ini adalah function component</p>
// }

// const HelloWord = () =>
// {
//     return <p> ini adalah arrow function </p>
// }

// class StatefullComponent extends React.Component
// {
//     render(){
//         return <p> ini adalah Statefull Component</p>
//     }
// }

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();































// import LoginComponent from './component/LoginComponent';

// import foto
// import imgGreg from './img/dp3.png'

// function HelloWorld()
// {
//     return <p> ini adalah function component</p>
// }

// const HelloWorld = () =>
// {
//     return <p> ini adalah arrow function </p>
// }