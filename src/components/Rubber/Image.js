import React from 'react';
import but from '../../assets/img/but.jpg';

const Image = () => {
  return (
    <div className="rubber-image col-lg-6" style={{objectFit: 'cover'}}>
      <img src={but} alt=""/>
    </div>
  );
};

export default Image;
