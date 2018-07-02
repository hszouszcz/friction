import React, { Component } from 'react';
import "./css/bootstrap.min.css";
import './App.scss';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import Header from './components/header/header';
import About from './components/about/about';
import Guide from './components/guide/guide';
import Rubber from './components/Rubber/Rubber';
import Order from "./components/order/order";
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <About />
        <Guide />
        <Rubber />
        <Order />
        <Footer />
      </div>
    );
  }
}

export default App;
