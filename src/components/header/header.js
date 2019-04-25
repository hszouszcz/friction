import React from 'react';
import logo from '../../assets/img/logo.jpg';

import "../../scss/header.scss";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import strings from './../../assets/locales/index';

const Header = (props) => (
  <div className="header">
    <nav className="navbar navbar-light sticky-top col-md-8 offset-md-2">
    <a className="navbar-brand" href="/"><img className="logo" src={logo} alt={"logo"}/></a>
    <ul className="nav justify-content-end menu-items-nav" style={{alignItems: 'center'}}>
      <li className="nav-item mobile-menu">
        <div className="dropdown">
          <button className="btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">{strings.main.header.pricing}</a>
              <Link className="dropdown-item" to="/cart">{strings.main.header.cart} ({props.itemsInCart})</Link>
              <Link className="dropdown-item" to="/guide">{strings.common.guide}</Link>
              <a className="dropdown-item" href="/terms">{strings.main.header.terms}</a>
              <a className="dropdown-item" href="/gallery">{strings.main.header.gallery}</a>
              <a className="dropdown-item" href="#">{strings.main.header.paymentData}</a>
              <Link className="dropdown-item" to="/order">{strings.main.header.order}</Link>
              <a className="dropdown-item" href="#">{strings.main.header.contact}</a>
              <a className="dropdown-item" href="#">{strings.main.header.language}</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link black-text" href="#">{strings.main.header.langShort}</a>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/order">{strings.main.header.order}</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link basket" href="/cart">{`${props.itemsInCart} `}<i className="fa fa-shopping-basket" aria-hidden="true"></i></a>
      </li>
    </ul>
  </nav>
  </div>
);

const mapStateToProps = (state) => {
  return ({
    itemsInCart: state.itemsInCart
  });
};

export default connect(mapStateToProps)(Header);