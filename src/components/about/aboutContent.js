import React from 'react';
import '../../scss/about.css';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';

const AboutContent = (props) => {
  return (
    <div className="content">
      <div className="section-title">
        {props.title}
      </div>
      <div className="text row">
        <div className="col-md-12 col-lg-6 first-col common-text">
          {props.firstColumn}
          <ButtonsRow>
            <ForwardButton
              text="Zobacz więcej"
              theme="black"
              forward
            />
          </ButtonsRow>
        </div>
        <div className="col-lg-6 second-col common-text">
          {props.secondColumn}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
