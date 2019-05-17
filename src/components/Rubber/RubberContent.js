import React from 'react';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import {Route} from 'react-router-dom';

const RubberContent = () => {
  return (
    <div className="rubber-content col-lg-5 col-xl-5">
      <div className="section-title">Gumy</div>
      <div className="caption-title">
        Czym różnią się dostępne  rodzaje gum na podeszwę?
      </div>
      <div className="common-text" style={{
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: 3,
        boxOrient: 'vertical'
      }}>
        Gumy stosowane na podeszwy obuwia wspinaczkowego ewoluowały od prawie 30 lat.
         Tak długi okres pracy różnych ośrodków badawczo-wdrożeniowych przyczynił się do obecnej bardzo szerokiej oferty.
          W Polsce od wielu lat największą renomą i popularnością cieszyły się gumy produkowane przez firmę Stealth, którymi były fabrycznie podklejane buty 5.10
      </div>
      <ButtonsRow>
        <div></div>
        <Route render={({history}) => (
          <ForwardButton
            text="Zobacz więcej"
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
