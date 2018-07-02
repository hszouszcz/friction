import React from 'react';

const RubberContent = () => {
  return (
    <div className="rubber-content col-lg-4 offset-lg-1">
      <div className="title">Gumy</div>
      <div className="caption-title">
        Czym różnią się dostępne rodzaje gum na podeszwę?
      </div>
      <div className="text" style={{
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: 3,
        boxOrient: 'vertical'
      }}>
        Gumy stosowane na podeszwy obuwia wspinaczkowego ewoluowały od prawie 30 lat.
        Tak długi okres pracy różnych ośrodków badawczo-wdrożeniowych przyczynił się do obecnej bardzo szerokiej oferty...
      </div>
      <button className="dark" style={{
        display: 'flex',
        paddingLeft: 0,
        alignItems: 'center'
      }}>
        <span>zobacz wiecej</span>
        <i className="fa fa-long-arrow-right" />
      </button>
    </div>
  );
};

export default RubberContent;
