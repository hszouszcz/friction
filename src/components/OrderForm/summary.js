import React, { Component } from 'react';
import CartItem from './CartItem';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')),
      address: JSON.parse(localStorage.getItem('address'))
    }
  }

  render() {
    return (
      <div className="cart container order-form">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="cart-header order-form-title">Podsumowanie</div>
            <div className="props-type">Pozycje w zamówieniu:</div>
            {this.state.cart.map((item, index) =>
              <CartItem
                key={index.toString()}
                index={index+1}
                details={item}
                deleteFunc={this.deleteFromCart}
              />
            )}
            <div className="props-type">Dane odbiorcy: </div>

          </div>
        </div>
      </div>
    );
  }
};

Summary.propTypes = {};
Summary.defaultProps = {};

export default Summary;
