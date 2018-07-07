import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './assets/fonts/roboto/fonts.css'
import "./css/bootstrap.min.css";
import './App.scss';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import OrderForm from './components/OrderForm/OrderForm';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
       <Header />
         <Route exact={true} path="/" component={HomePage}/>
         <Route path="/order" component={OrderForm} />
        <Footer />

      </div>

     </Router>
    );
  }
}

export default App;
