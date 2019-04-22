import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../scss/docs.css';
import strings from './../../assets/locales/index';
const GuideView = (props) => {
  return (
    <div className="guide-view docs col-md-6 offset-md-2">
      <div className="breadcrumbs">{strings.guide.breadCrumbs}</div>
      <div className="title">{strings.guide.title}</div>
      <div className="links">
        <Link smooth to="/guide#comfort">{strings.guide.link1}</Link>
        <Link smooth to="/guide#expense">{strings.guide.link2}</Link>
        <Link smooth to="/guide#shoe-fix-what-is-it">{strings.guide.link3}</Link>
        <Link smooth to="/guide#shoe-fix-when">{strings.guide.link4}</Link>
        <Link smooth to="/guide#edge-thickness-to-pick">{strings.guide.link5}</Link>
        <Link smooth to="/guide#what-is-edge">{strings.guide.link6}</Link>
        <Link smooth to="/guide#how-break-edges">{strings.guide.link7}</Link>
        <Link smooth to="/guide#when-replace-edges">{strings.guide.link8}</Link>
        <Link smooth to="/guide#edges-how-to">{strings.guide.link9}</Link>
        <Link smooth to="/guide#edge-replacement">{strings.guide.link10}</Link>
        <Link smooth to="/guide#not-last">{strings.guide.link11}</Link>
      </div>
      <div className="anchor-title" id="comfort">
       {strings.guide.link1}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption1}
      </div>
      <div className="anchor-title" id="expense">
        {strings.guide.link2}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption2}
      </div>
      <div className="anchor-title" id="shoe-fix-what-is-it">
        {strings.guide.link3}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption3}
      </div>
      <div className="anchor-title" id="shoe-fix-when">
        {strings.guide.link4}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption4_part1}
         <span><b>{strings.guide.caption4_part2_bold}</b></span>
         { strings.guide.caption4_part3}
      </div>
      <div className="anchor-title" id="edge-thickness-to-pick">
        {strings.guide.link5}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption5}
      </div>
      <div className="anchor-title" id="what-is-edge">
        {strings.guide.link6}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption6}
      </div>
      <div className="anchor-title" id="how-break-edges">
        {strings.guide.link7}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption7}
      </div>
      <div className="anchor-title" id="when-replace-edges">
        {strings.guide.link8}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption8}
      </div>
      <div className="anchor-title" id="edges-how-to">
        {strings.guide.link9}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption9}
      </div>
      <div className="anchor-title" id="edge-replacement">
        {strings.guide.link10}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption10}
      </div>
      <div className="anchor-title" id="last">
        {strings.guide.link11}
      </div>
      <div className="common-text anchor-text-padding">
        {strings.guide.caption11}
      </div>
    </div>
  );
};

GuideView.propTypes = {};
GuideView.defaultProps = {};

export default GuideView;


