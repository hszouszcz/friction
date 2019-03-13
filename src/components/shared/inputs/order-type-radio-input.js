import React from 'react';
import '../../../scss/custom-radio-button.css';

const OrderTypeRadioInput = (props) => {
  return (
    <div className="custom-checkbox">
      <label className={`order-type-radio-button ${props.model === props.value ? "checked" : ''}`}>
        {props.label}
        <input type="radio" value={props.value} checked={props.model === props.value} onChange={() => props.callback()}/>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};


export default OrderTypeRadioInput