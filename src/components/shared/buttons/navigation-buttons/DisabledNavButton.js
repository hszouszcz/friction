import React from 'react';
import './forwardButton.css';
import PropTypes from 'prop-types';

const setBgColor = (theme, disabled) => {
  if(disabled) {
    return 'disabled-bg';
  }
  return theme === 'black' ? 'black' : 'white'
};

const DisabledNavButton = (props) => {
  return (
    props.forward ?
      <button
        className={`forward-button ${setBgColor(props.theme, props.disabled)}`}
        onClick={() => props.onClick()}
      >
        <span className="common-text">{props.text}</span>
        <i className="fa fa-long-arrow-right"/>
      </button>
      :
      <button
        disabled={props.disabled}
        className={`forward-button ${props.theme === 'black' ? 'black-background' : 'white-background'}`}
        onClick={() => props.onClick()}
      >
        <i className="fa fa-long-arrow-left" style={{paddingRight: '10px'}}/>
        <span className="common-text">{props.text}</span>
      </button>

  );
};

DisabledNavButton.propTypes = {};
DisabledNavButton.defaultProps = {};

export default DisabledNavButton;
