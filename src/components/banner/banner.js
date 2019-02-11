import React from 'react';
import './banner.css';
import banner from '../../assets/img/main.png';
import mobileBanner from '../../assets/img/banner-mobile.png';
import PropTypes from 'prop-types';

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="col-lg-8 offset-lg-2">
        <img src={banner} className="screen-img" />
    </div>
    </div>
  );
};

Banner.propTypes = {};
Banner.defaultProps = {};

export default Banner;
