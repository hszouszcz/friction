import React from 'react';
import RadioInputSection from '../shared/inputs/radio-input-section';
import RadioInput from '../shared/inputs/radio-input';

const RepairType = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <span className="order-form-title">Typ naprawy</span>
        <div className="order-section">
          <RadioInputSection>
            <RadioInput label="Buty wspinaczkowe" callback={null}/>
            <RadioInput label="Buty trekkingowe" callback={null}/>
          </RadioInputSection>
        </div>
      </div>
    </div>
  );
};

export default RepairType;
