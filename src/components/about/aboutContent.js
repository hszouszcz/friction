import React from 'react';
import '../../scss/about.css';

const AboutContent = (props) => {
  return (
    <div className="content">
      <div className="title">
          {props.title}
      </div>
      <div className="text row">
        <div className="col-md-12 col-lg-6 first-col">
          {props.firstColumn}
          <button className="dark mobile right">
            <span>zobacz wiecej</span>
            <i className="fa fa-long-arrow-right" />
          </button>
        </div>
        <div className="col-lg-6 second-col">
          {props.secondColumn}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
