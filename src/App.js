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
import GuideView from './components/guide/GuideView';
import OrderRules from './components/order/OrderRules';
import Terms from './components/terms/terms';
import Treks from './components/boots/trek';
import RubberView from './components/Rubber/RubberView';
import OrderType from './components/OrderForm/OrderType';
import UserDetails from './components/OrderForm/UserDetails';

class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
       <Header />
         <Route exact={true} path="/" component={HomePage}/>
         <Route path="/order" component={OrderType} />
         <Route path="/order-details" component={OrderForm} />
         <Route path="/user-details" component={UserDetails} />
         <Route path="/guide" component={GuideView} />
         <Route path="/order-rules" component={OrderRules} />
         <Route path="/terms" component={Terms} />
         <Route path="/treks" component={Treks} />
         <Route path="/rubbers" component={RubberView} />
        <Footer />

      </div>

     </Router>
    );
  }
}

export default App;
