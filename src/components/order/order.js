import React, { Component } from 'react';
import OrderStep from './order-step';
import "./../../scss/order.css";
import { Route } from 'react-router-dom'

class Order extends Component  {

   button = () => (
    <Route render={({ history}) => (
      <button
        className="dark right"
        type='button'
        onClick={() => { history.push('/order-rules') }}
      >
        <span>zobacz wiecej</span>
        <i className="fa fa-long-arrow-right"/>
      </button>
    )} />
  )

  render() {
    return (
      <div className="order col-md-10 offset-md-1">
        <div className="row">
          <OrderStep
            icon="fa fa-shopping-basket"
            title="Złóż zamówienie"
            text="Give a little credit to our public schools.
                 For one beautiful night I knew what it
                  was like to be a grandmother.
                  Subjugated, yet honored. Why did you
                  bring us here? Well, thanks to the
                   Internet, I'm now bored with sex."
          />
          <OrderStep
            icon="fa fa-truck"
            title="Wyślij buty"
            text="Give a little credit to our public schools.
                 For one beautiful night I knew what it
                  was like to be a grandmother.
                  Subjugated, yet honored. Why did you
                  bring us here? Well, thanks to the
                   Internet, I'm now bored with sex."
          />
          <OrderStep
            icon="fa fa-reply"
            title="Poczekaj na email zwrotny"
            text="Give a little credit to our public schools.
                 For one beautiful night I knew what it
                  was like to be a grandmother.
                  Subjugated, yet honored. Why did you
                  bring us here? Well, thanks to the
                   Internet, I'm now bored with sex."
          />
          <OrderStep
            icon="fa fa-gift"
            title="Poczekaj na paczkę z butami"
            text="Give a little credit to our public schools.
                 For one beautiful night I knew what it
                  was like to be a grandmother.
                  Subjugated, yet honored. Why did you
                  bring us here? Well, thanks to the
                   Internet, I'm now bored with sex."
          />
        </div>
        {this.button()}
      </div>
    )
  }
}

export default Order;