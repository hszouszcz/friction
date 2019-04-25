import React from 'react';
import Image from './Image';
import '../../scss/rubber.css';
import '../../scss/common-styles.css';
import RubberContent from './RubberContent';
import fiveTen from '../../assets/img/but.jpg';

const Rubber = () => {
  return (
    <div className="rubber">
      <img src={fiveTen} alt="" className="clipped"/>
        <div className="col-lg-12 col-md-8 offset-md-2 offset-lg-0">
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
