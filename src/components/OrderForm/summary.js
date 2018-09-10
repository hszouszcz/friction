import React, {Component} from 'react';
import CartItem from './CartItem';
import '../../scss/cart-item.css';
import Route from 'react-router-dom/es/Route';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')),
      address: JSON.parse(localStorage.getItem('address'))
    };
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
                index={index + 1}
                details={item}
                deleteFunc={this.deleteFromCart}
              />
            )}
            <div className="cart-item" style={{borderBottom: 'none'}}>
              <div className="props-type" style={{color: '#6f7983', paddingTop: 0, paddingBottom: 20}}>Dane odbiorcy:</div>
              <div className="order-prop">
                {`${this.state.address.name} ${this.state.address.surname}`}
              </div>
              <div className="order-prop">
                {`${this.state.address.name} ${this.state.address.surname}`}
              </div>
              <div className="order-prop">
                {`${this.state.address.street} ${this.state.address.streetNumber}`}
              </div>
              <div className="order-prop">
                {`${this.state.address.postalCode} ${this.state.address.city}`}
              </div>
            </div>
            {this.state.address.invoice &&

            <div className="cart-item">
              <div className="props-type" style={{color: '#6f7983', paddingTop: 0, paddingBottom: 20}}>Dane do faktury:</div>
              <div>{`NIP: ${this.state.address.invoiceDetails.nip}`}</div>
              <div className="order-prop">
                {`${this.state.address.invoiceDetails.name}`}
              </div>
              <div className="order-prop">
                {`${this.state.address.invoiceDetails.street} ${this.state.address.invoiceDetails.streetNumber}`}
              </div>
              <div className="order-prop">
                {`${this.state.address.invoiceDetails.postalCode} ${this.state.address.invoiceDetails.city}`}
              </div>
              <div className="buttons">
                <Route render={({history}) => (
                  <button
                    onClick={() => {
                      history.push({pathname: '/user-details'});
                    }}
                  >
                    <span>Edytuj<i className="fa fa-pencil-square-o" aria-hidden="true"/></span>
                  </button>
                )}/>
              </div>
            </div>
            }

          </div>
        </div>
      </div>
    );
  }
};

Summary.propTypes = {};
Summary.defaultProps = {};

export default Summary;
