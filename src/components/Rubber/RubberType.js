import React from 'react';
import PropTypes from 'prop-types';
import strings from './../../assets/locales/index';

const RubberType = (props) => {
  return (
    <div className="rubber-type" style={{ borderTop: props.index === 1 ? '1px solid  #dadfe5' : null }}>
      <di className="row">
        <div className="col-3 rubber-name ">
          {props.name}
        </div>
        <div className="col-9">
          <div className="common-text anchor-text-padding">
            {props.description}
          </div>
          <div className="rubber-params row">
            <div className="thickness col-md-4">
              <div className="bar-title">{strings.rubber.hardness}</div>
              <div className="bar">
                <div style={{width: `${props.thickness}%`, backgroundColor: '#3c91f7'}}>
                </div>
                <div style={{width: `${100 - props.thickness}%`}}>
                </div>
              </div>
            </div><div className="friction col-md-4">
              <div className="bar-title">{strings.rubber.friction}</div>
              <div className="bar">
                <div style={{width: `${props.friction}%`, backgroundColor: '#eeca23'}}>
                </div>
                <div style={{width: `${100 - props.friction}%`}}>
                </div>
              </div>
            </div>
            <div className="edge col-md-4">
              <div className="bar-title">{strings.rubber.edges}</div>
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
