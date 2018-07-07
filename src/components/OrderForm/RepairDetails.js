import React from 'react';
import RadioInputSection from '../shared/inputs/radio-input-section';
import RadioInput from '../shared/inputs/radio-input';
import CustomSelect from '../shared/select/select';
import '../../scss/order-form.css';
import RepairType from './RepairType';

const RepairDetails = (props) => {
  return (
    <div>
      <RepairType/>
      <div className="row">

        <div className="col-md-10 offset-md-1">
          <span className="order-form-title">Szczegóły naprawy</span>
          <div className="order-section">
            <span className="section-title">Wymiana podeszwy - rodzaj gumy(*typowe gumy)</span>
            <CustomSelect/>
          </div>
          <div className="order-section">
            <span className="section-title">Wymiana rantów</span>
            <RadioInputSection>
              <RadioInput label="Tak - 100PLN" callback={null}/>
              <RadioInput label="Nie" callback={null}/>
              <RadioInput label="Wedle uznania" callback={null}/>
            </RadioInputSection>
          </div>
          <div className="order-section">
            <span className="section-title">Grubość rantów</span>
            <RadioInputSection>
              <RadioInput label="Standardowa" callback={null}/>
              <RadioInput label="Pogrubiona" callback={null}/>
              <RadioInput label="Extra gruba" callback={null}/>
            </RadioInputSection>
          </div>
          <div className="order-section">
            <span className="section-title">Dodatkowe opcje naprawy</span>
            <CustomSelect/>
          </div>
          <div className="order-section">
            <span className="section-title">Opis (model buta, rozmiar), inne naprawy z cennika, itp.*</span>
            <textarea/>
          </div>
          <div className="note">
            <p>* Prosimy podać inne wymagane naprawy w polu "Opis" !</p>
            <p>* Dodając kilka par do koszyka prosimy dokładnie opisać poszczególne buty!</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RepairDetails;
