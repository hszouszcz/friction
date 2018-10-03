import React from 'react';
import PropTypes from 'prop-types';

const RubberThickness = (props) => {
  return (
    <div className="rubber-type">
      <di className="row">
        <div className="col-3 rubber-name ">
          {props.name}
        </div>
        <div className="col-9">
          <div className="common-text anchor-text-padding">
            {props.description}
          </div>
        </div>
      </di>
    </div>
  );
};

RubberThickness.propTypes = {};
RubberThickness.defaultProps = {};

export default RubberThickness;
