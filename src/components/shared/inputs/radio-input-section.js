import React from 'react';
import '../../../scss/radio-input-section.css'

const RadioInputSection = (props) => {
  return (
    <div className="radio-input-section" >
      {props.children}
    </div>
  );
};

RadioInputSection.propTypes = {};
RadioInputSection.defaultProps = {};

export default RadioInputSection;
