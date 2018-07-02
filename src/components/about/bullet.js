import React from 'react';
import '../../scss/bullet.css';

const Bullet = (props) => {
  return (
    <div className="bullet col-md-4">
      <div className="bullet-dot">-</div>
      <div className='text'>{props.text}</div>
    </div>
  );
};

export default Bullet;
