import React from 'react';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import {Route} from 'react-router-dom';
import strings from './../../assets/locales/index';

const RubberContent = () => {
  return (
    <div className="rubber-content col-lg-5 col-xl-5">
      <div className="section-title">{strings.rubber.rubbers}</div>
      <div className="caption-title">
        {strings.rubber.differences}
      </div>
      <div className="common-text" style={{
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: 3,
        boxOrient: 'vertical'
      }}>
       {strings.rubber.main}
      </div>
      <ButtonsRow>
        <div></div>
        <Route render={({history}) => (
          <ForwardButton
            text={strings.seeMore}
            theme="black"
            onClick={() => history.push('/rubbers')}
            forward
          />
        )}/>
      </ButtonsRow>
    </div>
  );
};

export default RubberContent;
