import React from 'react';
import './banner.css';
import banner from '../../assets/img/main.png';
import mobileBanner from '../../assets/img/banner-mobile.png';
import PropTypes from 'prop-types';

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={banner} className="screen-img"/>
    </div>
  );
};

Banner.propTypes = {};
Banner.defaultProps = {};

export default Banner;
