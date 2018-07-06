import React from 'react';
import '../../../scss/radio-input-section.css'

const RadioInputSection = (props) => {
  return (
    <div className="radio-input-section col-md-12" >
      {props.children}
    </div>
  );
};

RadioInputSection.propTypes = {};
RadioInputSection.defaultProps = {};

export default RadioInputSection;
