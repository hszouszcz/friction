import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../scss/docs.css';
import strings from './../../assets/locales/index';

const Terms = (props) => {
  return (
    <div className="terms docs col-md-6 offset-md-2">
      <div className="breadcrumbs">{strings.terms.breadcrumbs}</div>
      <div className="title">{strings.terms.title}</div>
      <div className="links">
        <Link smooth to="/terms#ordering">{strings.terms.link1}</Link>
        <Link smooth to="/terms#pricing">{strings.terms.link2}</Link>
        <Link smooth to="/terms#prep">{strings.terms.link3}</Link>
        <Link smooth to="/terms#orders">{strings.terms.link4}</Link>
        <Link smooth to="/terms#eta">{strings.terms.link5}</Link>
        <Link smooth to="/terms#express">{strings.terms.link6}</Link>
        <Link smooth to="/terms#invoice">{strings.terms.link7}</Link>
        <Link smooth to="/terms#shipping">{strings.terms.link8}</Link>
        <Link smooth to="/terms#payment">{strings.terms.link9}</Link>
        <Link smooth to="/terms#expired">{strings.terms.link10}</Link>
        <Link smooth to="/terms#guaranty">{strings.terms.link11}</Link>
      </div>

      <div className="common-text anchor-text-padding">
        {strings.terms.ownership}
      </div>

      <div className="anchor-title" id="ordering">
        {strings.terms.link1}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc1}
      </div>
      <div className="anchor-title" id="pricing">
        {strings.terms.link2}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc2}
      </div>
      <div className="anchor-title" id="prep">
        {strings.terms.link3}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc3}
      </div>
      <div className="anchor-title" id="orders">
        {strings.terms.link4}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc4}
      </div>
      <div className="anchor-title" id="eta">
        {strings.terms.link5}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc5}
      </div>
      <div className="anchor-title" id="express">
        {strings.terms.link6}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.link6}
      </div>
      <div className="anchor-title" id="invoice">
        {strings.terms.link7}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc7}
      </div>
      <div className="anchor-title" id="shipping">
        {strings.terms.link8}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc8}
      </div>
      <div className="anchor-title" id="payment">
        {strings.terms.link9}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc9}
      </div>
      <div className="anchor-title" id="expired">
        {strings.terms.link10}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc10}
      </div>
      <div className="anchor-title" id="guaranty">
        {strings.terms.link11}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.terms.desc11}
      </div>
      <div className="common-text anchor-text-padding">{strings.terms.lastUpdate}</div>
    </div>
  );
};

export default Terms;
