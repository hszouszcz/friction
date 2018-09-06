import React, { Component } from 'react';
import '../../scss/order-form.css';
import '../../scss/cart-item.css';
import CartItem from './CartItem';
import {Route} from 'react-router-dom';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart'))
    };
  }

  componentDidMount() {
  }

  render() {
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
              />
            )}
            <div className="cart-footer">
              <Route render={({history}) => (
                <ButtonsRow>
                  <ForwardButton
                    text="Dalej"
                    theme="black"
                    onClick={() => { history.push({pathname: '/user-details', state: this.getOrderDetails()}) }}
                    forward
                  />
                  <button
                    className="add-more-button"
                    onClick={() => history.push('/order-type')}
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

const mock = [{
  orderType: 'Buty Wspinaczkowe',
  props: [
    {
      name: 'Vibram Xs',
      price: '150'
    },
    {
      name: 'Wymiana Rantów',
      price: '70'
    },
    {
      name: 'Wymiana Rantów',
      price: '70'
    },
    {
      name: 'Rany Extra Grube',
      price: '30'
    },
  ]
},
  {
    orderType: 'Buty Wspinaczkowe',
    props: [
      {
        name: 'Vibram Xs',
        price: '150'
      },
      {
        name: 'Wymiana Rantów',
        price: '70'
      },
      {
        name: 'Wymiana Rantów',
        price: '70'
      },
      {
        name: 'Rany Extra Grube',
        price: '30'
      },
    ]
  }];

export default Cart;
