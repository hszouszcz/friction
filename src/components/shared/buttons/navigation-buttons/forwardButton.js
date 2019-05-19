import React from 'react';
import './forwardButton.css';

const ForwardButton = (props) => {
  return (
    props.forward ?
      <button
        className={`forward-button ${props.theme === 'black' ? 'black' : 'white'}`}
        onClick={() => props.onClick()}
      >
        <span className="common-text">{props.text}</span>
        <i className="fa fa-long-arrow-right"/>
      </button>
      :
      <button
        className={`forward-button ${props.theme === 'black' ? 'black-background' : 'white-background'}`}
        onClick={() => props.onClick()}
      >
        <i className="fa fa-long-arrow-left" style={{paddingRight: '10px'}}/>
        <span className="common-text">{props.text}</span>
      </button>

  );
};


export default ForwardButton;
