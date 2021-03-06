import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
import OrderTypeRadioButton from '../shared/inputs/order-type-radio-input';
import '../../scss/buttons.css';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import DisabledNavButton from '../shared/buttons/navigation-buttons/DisabledNavButton';
import CheckBox from './../Checkbox/checkbox';
import strings from '../../assets/locales';

class OrderType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 0,
      agreementSelected: false,
      blink: false
    };
  }

  blink = () => {
    this.setState({
      blink: true
    }, () => setTimeout(() => this.setState({blink: false}), 800))
  }

  render() {
    return (
      <div className="order-form">
        <div className="col-md-6 offset-md-3">
          <span className="caption-title">{strings.orderForm.typeOfOrder}</span>
          <div className="order-section">
            <OrderTypeRadioButton label={strings.orderForm.climbing} value={0} model={this.state.orderType}
              callback={() => this.setState({ orderType: 0 })} />
            <OrderTypeRadioButton label={strings.orderForm.trekking} value={1} model={this.state.orderType}
              callback={() => this.setState({ orderType: 1 })} />
            <OrderTypeRadioButton label={strings.orderForm.other} value={2} model={this.state.orderType}
              callback={() => this.setState({ orderType: 2 })} />
          </div>
          <Route render={({ history }) => (
            <ButtonsRow>
              <DisabledNavButton
                text={strings.orderForm.forward}
                theme="black"
                onClick={() => { this.state.agreementSelected ? history.push({ pathname: '/order-details', state: { orderType: this.state.orderType } }) : this.blink() }}
                forward
                disabled={!this.state.agreementSelected}
              />
            </ButtonsRow>
          )} />
          <div className="col-12">
            <div className="order-section">
              <div className={`${this.state.blink ? 'blink' : ''}`}>
              <CheckBox
                id="rodo"
                onClick={(e) => { return this.setState({ agreementSelected: !this.state.agreementSelected }); }}
                value={this.state.agreementSelected}
                label={strings.rodoAgreement}
              />
              </div>
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
