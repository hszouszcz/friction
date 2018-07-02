import React, { Component } from 'react';
import "./css/bootstrap.min.css";
import './App.scss';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import Header from './components/header/header';
import About from './components/about/about';
import Guide from './components/guide/guide';
import Rubber from './components/Rubber/Rubber';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <About />
        <Guide />
        <Rubber />
      </div>
    );
  }
}

export default App;
