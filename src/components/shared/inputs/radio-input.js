import React from 'react';
import '../../../scss/custom-radio-button.css';

const radioInput= (props) => {
  return (
    <div className="custom-checkbox">
      <label className="radio-container">
        {props.label}
        <input type="radio" onChange={(e) => {
           (e.target.scrollIntoView({"block": "center"}));
           props.callback();
        }}/>
        <span className="checkmark"><i className="fa fa-check" aria-hidden="true"></i></span>
      </label>
    </div>
  );
};


export default radioInput