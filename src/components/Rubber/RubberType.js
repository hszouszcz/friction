import React from 'react';
import PropTypes from 'prop-types';

const RubberType = (props) => {
  return (
    <div className="rubber-type">
      <di className="row">
        <div className="col-3 rubber-name ">
          {props.name}
        </div>
        <div className="col-9">
          <div className="anchor-text">
            {props.description}
          </div>
          <div className="rubber-params row">
            <div className="thickness col-md-4">
              <div className="bar-title">Twardość</div>
              <div className="bar">
                <div style={{width: `${props.thickness}%`, backgroundColor: '#3c91f7'}}>
                </div>
                <div style={{width: `${100 - props.thickness}%`}}>
                </div>
              </div>
            </div><div className="friction col-md-4">
              <div className="bar-title">Tarcie</div>
              <div className="bar">
                <div style={{width: `${props.friction}%`, backgroundColor: '#eeca23'}}>
                </div>
                <div style={{width: `${100 - props.friction}%`}}>
                </div>
              </div>
            </div>
            <div className="edge col-md-4">
              <div className="bar-title">Krawądki</div>
              <div className="bar">
                <div style={{width: `${props.edge}%`, backgroundColor: '#ee5823'}}>
                </div>
                <div style={{width: `${100 - props.edge}%`}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </di>
    </div>
  );
};

RubberType.propTypes = {};
RubberType.defaultProps = {};

export default RubberType;