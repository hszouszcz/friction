import React from 'react';
import './buttons-row.css';

const ButtonsRow = (props) => {
  return (
    <div className="buttons-row">
      {props.children}
    </div>
  );
};

export default ButtonsRow;
