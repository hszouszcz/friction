import React from 'react';
import '../../scss/docs.css';
import strings from './../../assets/locales/index';

const OrderRules = (props) => {
  return (
    <div className="guide-view docs col-md-6 offset-md-2">
      <div className="breadcrumbs">{strings.orderRules.breadcrumbs}</div>
      <div className="title">{strings.orderRules.title}</div>
      <div className="anchor-title">
        {strings.orderRules.step1}
      </div>
      <div className="common-text anchor-text-padding">
        <div>{strings.orderRules.text1[0]}</div>
        <div>{strings.orderRules.text1[1]}</div>
        <div>{strings.orderRules.text1[2]}</div>
        <div>{strings.orderRules.text1[3]}</div>
      </div>
      <div className="anchor-title">
        {strings.orderRules.step2}
      </div>
      <div className="common-text anchor-text-padding">
        <div>{strings.orderRules.text2[0]}</div>
        <div>{strings.orderRules.text2[1]}</div>
        <div>{strings.orderRules.text2[2]}</div>
      </div>
      <div className="anchor-title">
        {strings.orderRules.step3}
      </div>
      <div className="common-text anchor-text-padding">
        <div>{strings.orderRules.text3[0]}</div>
        <div>{strings.orderRules.text3[1]}</div>
        <div>{strings.orderRules.text3[2]}</div>
        <div>{strings.orderRules.text3[3]}</div>
        <div>{strings.orderRules.text3[4]}</div>
      </div>
      <div className="anchor-title">
        {strings.orderRules.step4}
      </div>
      <div className="common-text anchor-text-padding">
        <div>{strings.orderRules.text4[0]}</div>
        <div>{strings.orderRules.text4[1]}</div>
        <div>{strings.orderRules.text4[2]}</div>
        <div>{strings.orderRules.text4[3]}</div>

      </div>
      <div className="anchor-title">
        {strings.orderRules.howLong}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.orderRules.howLongText}
      </div>
    </div>
  );
};

export default OrderRules;
