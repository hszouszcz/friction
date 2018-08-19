import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { Route } from 'react-router-dom'
import OrderTypeRadioButton from '../shared/inputs/order-type-radio-input';
import '../../scss/buttons.css';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';

class OrderType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: 0,
      agreementSelected: false,
    };
  }

  render() {
    return (
      <div className="order-form">
        <div className="col-md-6 offset-md-3">
          <span className="caption-title">Wybierz rodzaj usługi</span>
          <div className="order-section">
            <OrderTypeRadioButton label="Naprawa butów wspinaczkowych" value={0} model={this.state.orderType}
                                  callback={() => this.setState({orderType: 0})}/>
            <OrderTypeRadioButton label="Naprawa butów trekkingowych" value={1} model={this.state.orderType}
                                  callback={() => this.setState({orderType: 1})}/>
            <OrderTypeRadioButton label="Trzecia opcja" value={2} model={this.state.orderType}
                                  callback={() => this.setState({orderType: 2})}/>
          </div>
          <Route render={({history}) => (
            <ButtonsRow>
              <ForwardButton
                text="Dalej"
                theme="black"
                onClick={() => { history.push({pathname: '/order-details', state: this.state.orderType}) }}
                forward
              />
            </ButtonsRow>
          )} />
          <div className="col-12 agreement">
            <div className="order-section">
              <input type="checkbox" id="agreement" checked={this.state.agreementSelected}
                     value={this.state.agreementSelected} onChange={(e) => {
                return this.setState({agreementSelected: !this.state.agreementSelected});
              }}/>
              <label htmlFor="agreement">Owiadczam, że zapoznalem/am sie z Poradnikiem dotyczacym skladania
                zamowien</label>
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
