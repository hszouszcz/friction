import React from 'react';
import '../../scss/common-styles.css';
const Button = (props) => {
  return (
    <button
     >
      <span>{props.text}</span>
      <i className={props.icon} />
    </button>
  );
};


export default Button;
