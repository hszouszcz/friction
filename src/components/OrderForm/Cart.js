import React, { Component } from 'react';
import '../../scss/order-form.css';
import '../../scss/cart-item.css';
import CartItem from './CartItem';
import {Route} from 'react-router-dom';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import {connect} from 'react-redux';
import {updateCart} from '../../redux/actions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart'))
    };
  }
  deleteFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index-1, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({cart: JSON.parse(localStorage.getItem('cart'))});
    this.props.updateCart(JSON.parse(localStorage.getItem('cart')).length)
  };

  sumUp = () => {
    let value = 0;
    this.state.cart.forEach((item) => {
        item.orderProps.forEach(prop => {
          if(prop !== null)
          value = value + prop.price;
        });
        if(item.additionalOptions !== null)
      value += item.additionalOptions.price
    });
    return value;
  };

  render() {

    if(!this.state.cart || this.state.cart.length === 0) {
      return (
        <div style={{paddingTop: 100, paddingBottom: 30, textAlign: 'center', minHeight: 500}}>
          <div style={{paddingBottom: 30}}>Koszyk jest pusty!</div>
          <Route render={({ history }) => (
              <ForwardButton
                text="Złóż zamówienie"
                theme="black"
                onClick={() => { history.push({pathname: '/order'}) }}
                forward
              />
          )} />
        </div>)
    }

    return (
      this.state.cart &&
      <div className="cart container order-form">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="cart-header order-form-title">Koszyk</div>
            {this.state.cart.map((item, index) =>
              <CartItem
                key={index.toString()}
                index={index+1}
                details={item}
                deleteFunc={this.deleteFromCart}
              />
            )}
            <div className="sum-up">Suma: <span className="value">{`${this.sumUp()} PLN`}</span></div>
            <div className="cart-footer">
              <Route render={({history}) => (
                <ButtonsRow>
                 {this.state.cart.length > 0 && <ForwardButton
                    text="Zamawiam"
                    theme="black"
                    onClick={() => { history.push({pathname: '/user-details', state: {value: this.sumUp()}}) }}
                    forward
                  />}
                  <button
                    className="add-more-button"
                    onClick={() => history.push('/order')}
                  >
                    <span>Dodaj kolejną naprawę</span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </ButtonsRow>
              )} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Cart.propTypes = {};
Cart.defaultProps = {};

const matchDispatchToProps = (dispatch) => ({
  updateCart: (itemsInCart) => {
    dispatch(updateCart(itemsInCart));
  }
});


export default connect(null, matchDispatchToProps)(Cart);
