import React from 'react';
import '../../scss/custom-radio-button.css';
import CustomSelect from '../shared/select/select';
import RadioInput from '../shared/inputs/radio-input';
import RadioInputSection from '../shared/inputs/radio-input-section';

const Repair = () => {
  return (
    <div className="repair col-lg-6">
      <div className="title">Poradnik</div>
      <div className="caption-title">Kied konieczna jest naprawa?</div>
      <div className="text">
        <p> Najlepsze efekty uzyskuje się jeśli nie doszło do całkowitego zużycia podeszwy na czubku, oraz jeśli nie
          zostały uszkodzone ranty. W praktyce oznacza to, że jeśli grubość podeszwy na czubku wynosi ok. 20-30%
          grubości pierwotnej,
          to jest to najlepszy moment na dokonanie naprawy. Inaczej mówiąc, jeśli zaczynamy odczuwać dyskomfort,
          to jest to sygnał aby bliżej przyjrzeć się butom i nie zwlekać z naprawą.</p>
        <p><span>Nie przecieraj rantów! </span>
        W porę wykonana wymiana samej podeszwy gwarantuje najlepsze zachowanie pierwotnych parametrów buta.</p>
      </div>
      <button className="dark">
        <span>zobacz wiecej</span>
        <i className="fa fa-long-arrow-right"/>
      </button>
    </div>
  );
};

export default Repair;
