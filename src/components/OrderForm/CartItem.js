import React from 'react';
import '../../scss/cart-item.css';
import orderTypes from '../../constants/orderTypes';
import {Route} from 'react-router-dom';

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="order-type">{`${props.index} ${orderTypes[props.details.orderType]}`}</div>
      {props.details.orderProps.map((detail, index) =>
        detail !== null &&
        <div
          className="order-prop"
          key={index.toString()}
        >
          <div>{detail.name}</div>
          <div>{`${detail.price} PLN`}</div>
      </div>)}
      <div className="buttons">

        <button

        >
         <span>Usuń<i className="fa fa-times" aria-hidden="true"></i></span>
        </button>
        <Route render={({history}) => (
        <button
          onClick={() => { history.push({pathname: '/order-details', state: {orderToEdit: props.index }}) }}
        >
          <span>Edytuj<i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
        </button>
          )} />
      </div>

    </div>
  );
};

CartItem.propTypes = {};
CartItem.defaultProps = {};

export default CartItem;
