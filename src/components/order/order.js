import React, { Component } from 'react';
import OrderStep from './order-step';
import "./../../scss/order.css";
import '../../scss/common-styles.css';
import { Route } from 'react-router-dom'
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import strings from './../../assets/locales/index';

class Order extends Component  {

   button = () => (
    <Route render={({history}) => (
      <ButtonsRow>
        <ForwardButton
          text={strings.common.seeMore}
          theme="black"
          onClick={() => { history.push('/order-rules') }}
          forward
        />
      </ButtonsRow>
    )} />
  );

  render() {
    return (
      <div className="order col-md-8 offset-md-2">
      <div className="caption-title" style={{textAlign: 'center'}}>
     {strings.main.order.title}
      </div>
        <div className="row">
          <OrderStep
            icon="fa fa-shopping-basket"
            title={strings.main.order.step1}
            text={strings.main.order.text1}
          />
          <OrderStep
            icon="fa fa-truck"
            title={strings.main.order.step2}
            text={strings.main.order.text2}
          />
          <OrderStep
            icon="fa fa-reply"
            title={strings.main.order.step3}
            text={strings.main.order.text3}
          />
          <OrderStep
            icon="fa fa-gift"
            title={strings.main.order.step4}
            text={strings.main.order.text4}
          />
        </div>
        {this.button()}
      </div>
    )
  }
}

export default Order;