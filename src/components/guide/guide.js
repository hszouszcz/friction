import React from 'react';
import Repair from './repair';
import '../../scss/guide.css';
import Gallery from './gallery';

const Guide = () => {
  return (
    <div className="guide col-md-8 offset-md-2">
      <div className="row">
        <Repair/>
        <Gallery/>
      </div>
    </div>
  );
};

export default Guide;
