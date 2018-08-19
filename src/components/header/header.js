import React from 'react';
import logo from '../../assets/img/logo.jpg';

import "../../scss/header.css";
import OrderForm from '../OrderForm/OrderForm';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="navbar navbar-light sticky-top col-md-8 offset-md-2">
    <a className="navbar-brand"><img className="logo" src={logo} alt={"logo"}/></a>
    <ul className="nav justify-content-end menu-items-nav" style={{alignItems: 'center'}}>
      <li className="nav-item mobile-menu">
        <div className="dropdown">
          <button className="btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Cennik</a>
            <Link className="dropdown-item" to="/guide">Poradnik</Link>
            <a className="dropdown-item" href="#">Regulamin</a>
            <a className="dropdown-item" href="#">Fotogaleria</a>
            <a className="dropdown-item" href="#">Kontakt</a>
            <a className="dropdown-item" href="#">Dane do przelewu</a>
            <a className="dropdown-item" href="#">English</a>
            <Link className="dropdown-item" to="/order">Zamów</Link>
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
        <a className="nav-link disabled" href="#">Basket</a>
      </li>
    </ul>
  </nav>
  </div>
);

export default Header;