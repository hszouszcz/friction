import React from 'react';
import logo from '../../assets/img/logo-white.png';
import './../../scss/footer.css';
import "../../scss/header.css";
import strings from './../../assets/locales/index';

const Footer = () => (
    <footer>
        <div className="row col-md-8 offset-md-2 no-gutters">
         <div className="col-sm-4 col-lg-3 section logo">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt={"logo"} /></a>
          </div>
            <div className="col-sm-4 col-lg-3  section">
            <div className="title">{strings.adress}</div>
            <div>{strings.friction}</div>
            <div>{strings.street}</div>
            <div>{strings.postCodeAndCIty}</div>
         </div>
         <div className="col-sm-4 col-lg-3 section">
         <div className="title">{strings.emailAndPhone}</div>
            <div>{strings.phone1}</div>
            <div>{strings.phone2}</div>
            <div>{strings.email}</div>
         </div>
         <div className="col-sm-4 col-lg-3 section">
            <div className="title">{strings.openHours}</div>
            <div>{strings.unevenHours}</div>
            <div>{strings.evenHours}</div>
            {/* <div>fb</div> */}
         </div></div>
    </footer>
);

export default Footer;