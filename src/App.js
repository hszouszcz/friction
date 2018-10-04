import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './assets/fonts/roboto/fonts.css';
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
import Cart from './components/OrderForm/Cart';
import Summary from './components/OrderForm/summary';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {cartReducer} from './redux/reducers';
import ScrollToTop from './components/ScrollToTop';
import GalleryView from './components/gallery/gallery';

let store = createStore(cartReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: 0,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
         <ScrollToTop>
           <div className="App" style={{maxWidth: 1140, margin: 'auto'}}>
            <Header/>
            <Route exact={true} path="/" component={HomePage}/>
            <Route path="/order" component={OrderType}/>
            <Route path="/order-details" component={OrderForm}/>
            <Route path="/user-details" component={UserDetails}/>
            <Route path="/guide" component={GuideView}/>
            <Route path="/gallery" component={GalleryView}/>
            <Route path="/order-rules" component={OrderRules}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/treks" component={Treks}/>
            <Route path="/rubbers" component={RubberView}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/summary" component={Summary}/>
            <Footer/>
          </div></ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
