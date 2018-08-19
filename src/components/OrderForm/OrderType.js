import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import OrderTypeRadioButton from '../shared/inputs/order-type-radio-input';
import '../../scss/buttons.css';

class OrderType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 0,
      agreementSelected: false,
    }
  }
  
  render() {
    return (
      <div className="order-form">
        <div className="col-md-6 offset-md-3">
          <span className="order-form-title">Wybierz rodzaj usługi</span>
          <div className="order-section">
              <OrderTypeRadioButton label="Naprawa butów wspinaczkowych" value={0} model={this.state.orderType} callback={() => this.setState({orderType: 0})}/>
              <OrderTypeRadioButton label="Naprawa butów trekkingowych" value={1} model={this.state.orderType} callback={() => this.setState({orderType: 1})}/>
              <OrderTypeRadioButton label="Trzecia opcja" value={2} model={this.state.orderType} callback={() => this.setState({orderType: 2})}/>
          </div>
          <div className="footer-buttons">
            <button className="move-forward" disabled={!this.state.agreementSelected}>
              Dalej
            <i className="fa fa-long-arrow-right" />
          </button>
          </div>
          <div className="col-12 agreement">
            <div className="order-section">
              <input type="checkbox" id="agreement" checked={this.state.agreementSelected} value={this.state.agreementSelected} onChange={(e) => this.setState({agreementSelected: e.target.value})}/>
              <label htmlFor="agreement">Owiadczam, że zapoznalem/am sie z Poradnikiem dotyczacym skladania zamowien</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

OrderType.propTypes = {};
OrderType.defaultProps = {};

export default withRouter(OrderType);
