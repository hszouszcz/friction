import React from 'react';
import '../../scss/custom-radio-button.css';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import { Route } from 'react-router-dom';
import strings from './../../assets/locales/index';

const Repair = () => {
  return (
    <div className="repair col-lg-6">
      <div className="section-title">{strings.common.guide}</div>
      <div className="caption-title">{strings.main.guide.title}</div>
      <div className="common-text">
        <p>{strings.main.guide.text_part1}</p>
        <p><span>{strings.main.guide.text_bold}</span></p>
        <p>{strings.main.guide.text_part3}</p>
      </div>
      <ButtonsRow style="d-none">
        <div></div>
        <Route render={({ history }) => (
          <ForwardButton
            text={strings.common.seeMore}
            theme="black"
            onClick={() => { history.push('/guide') }}
            forward
          />
        )} />
      </ButtonsRow>
    </div>
  );
};

export default Repair;
