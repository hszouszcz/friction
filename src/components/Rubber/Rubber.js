import React from 'react';
import Image from './Image';
import '../../scss/rubber.css';
import '../../scss/common-styles.css';
import RubberContent from './RubberContent';

const Rubber = () => {
  return (
    <div className="rubber">
        <div className="col-lg-11 col-md-10 offset-md-1 offset-lg-0">
          <div className="row">
          <Image />
          <RubberContent/>
        </div>
      </div>
    </div>
  );
};

Rubber.propTypes = {};
Rubber.defaultProps = {};

export default Rubber;
