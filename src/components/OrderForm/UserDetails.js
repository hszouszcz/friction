import React from 'react';
import CustomSelect from '../shared/select/select';

const UserDetails = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <div className="order-form-title">
          Twoje dane
        </div>
        <div className="order-section row no-gutters">
          <div className="col-md-6">
            <label htmlFor="name">Imię</label>
            <input type="text" id="name"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="surname">Nazwisko</label>
            <input type="text" id="surname"/>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="phone">Numer telefonu</label>
            <input type="phone" id="phone"/>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1">
        <div className="order-form-title">
          Adres
        </div>
        <div className="order-section row no-gutters">
          <div className="col-md-6">
            <label htmlFor="street">Ulica</label>
            <input type="text" id="street"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="street-number">Numer ulicy/lokalu</label>
            <input type="text" id="street-number"/>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1">
        <div className="order-section">
          <span className="section-title">Jak mamy odesłać Twoje buty?</span>
          <CustomSelect/>
        </div>
        <div className="col-12 agreement">
          <div className="order-section">
            <input type="checkbox" id="agreement"/>
            <label htmlFor="agreement">Wyrażam zgodę na przetważanie i przetrzymywanie moich danych osobowych
              niezbędnych do realizacji zamówienia przez Friction s.c. zgodnie z ustawą o ochronie danych osobowych z
              dnia 29.08.1997r. (Dz. U. Nr 133, poz. 883). Dane te będą wykorzystywane w celu ewidencji sprzedaży i
              kontaktu z nabywcą wyłącznie przez Friction s.c.</label>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserDetails;
