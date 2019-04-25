import React from 'react';
import '../../scss/docs.css';
import {Link} from 'react-router-dom';
import strings from './../../assets/locales/index';

const Treks = (props) => {
  return (
    <div className="Treks docs col-md-6 offset-md-1">
      <div className="breadcrumbs">{strings.trekBreadCrumbs}</div>
      <div className="title">{strings.trekTitle}</div>
      <div className="links">
        <Link smooth to="/treks">{strings.trekLink1}</Link>
        <Link smooth to="/treks">{strings.trekLink2}</Link>
        <Link smooth to="/treks">{strings.trekLink3}</Link>
      </div>

      <div className="anchor-title">
       {strings.trekLink1}
      </div>
      <div className="common-text">
        {strings.trekCaption1}
      </div>
      <div className="anchor-title">
        {strings.trekLink2}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.trekCaption2}
      </div>
      <div className="anchor-title">
        {strings.trekLink3}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.trekCaption3}
      </div>
    </div>
  );
};

export default Treks;
