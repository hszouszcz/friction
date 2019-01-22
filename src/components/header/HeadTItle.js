import React from 'react';
import '../../scss/head-title.css'
import strings from '../../assets/locales';

const HeadTitle = () => {
  return (
    <div className="col-md-8 offset-md-2 head-title no-gutters">
        <div className="col-md-8 col-lg-8 col-xl-7">{strings.headTitle}</div>
    </div>
  );
};

export default HeadTitle;
