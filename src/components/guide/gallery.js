import React from 'react';
import rant from '../../assets/img/rant.jpg';
import podeszwa2 from '../../assets/img/podeszwa2.jpg';
import podeszwa from '../../assets/img/podeszwa.jpg';
import vibram from "../../assets/img/vibram.jpg";

const Gallery = () => {
  return (
    <div className="gallery col-lg-5 offset-lg-1">
      <div className="row">
        <div className="col-lg-5">
          <div className="row">
            <img src={rant} className="small-img" alt=""/>
          </div>
          <div className="row">
            <img src={podeszwa2} className="small-img" alt=""/>
          </div>
        </div>
        <div className="col-lg-7">
          <img src={podeszwa} className="big-img" alt=""/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10"
             style={{paddingLeft: 0}}
        ><img src={vibram} className="small-img" alt=""/>
        </div>
        <div style={{
          backgroundColor: 'black',
          padding: 0,
          margin: '5px 0',
          flex: '13%',
          maxWidth: '13%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
        >
          <i className="fa fa-long-arrow-right" style={{color: 'white'}}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
