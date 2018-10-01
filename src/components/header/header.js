import React from 'react';
import logo from '../../assets/img/logo.jpg';

import "../../scss/header.css";
import OrderForm from '../OrderForm/OrderForm';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
            <a className="dropdown-item" href="#">Cennik</a>
            <Link className="dropdown-item" to="/cart">Koszyk ({props.itemsInCart})</Link>
            <Link className="dropdown-item" to="/guide">Poradnik</Link>
            <a className="dropdown-item" href="#terms">Regulamin</a>
            <a className="dropdown-item" href="#">Fotogaleria</a>
            <a className="dropdown-item" href="#">Dane do przelewu</a>
            <Link className="dropdown-item" to="/order">Zamów</Link>
            <a className="dropdown-item" href="#">Kontakt</a>
            <a className="dropdown-item" href="#">English</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link black-text" href="#">EN</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Zamów</a>
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