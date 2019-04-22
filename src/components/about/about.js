import React from 'react';
import '../../scss/about.css';
import Bullets from './bullets';
import AboutContent from './aboutContent';
import strings from '../../assets/locales/index'
const About = () => (
  <div className="about">
    <div className="col-md-8 offset-md-2">
      <div className="row bullets">
        <Bullets/>
      </div>
      <AboutContent
        title={'O nas'}
        firstColumn={strings.aboutFirstColumn}
        secondColumn={strings.aboutSecondColumn}
      />

    </div>
  </div>
);


export default About;