import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/order-form.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <div className="cart container order-form">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <span className="order-form-title">Koszyk</span>
          {mock.map((item, index) =>
         <CartItem
           key={index.toString()}
          index={index+1}
          details={item}
         />
          )}
        </div>
      </div>
    </div>
  );
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
