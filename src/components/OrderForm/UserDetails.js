import React, {Component} from 'react';
import CustomSelect from '../shared/select/select';
import {Route} from 'react-router-dom';
import '../../scss/order-form.css';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('address')) {
      this.state = JSON.parse(localStorage.getItem('address'));
    } else {
      this.state = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        street: '',
        streetNumber: '',
        postalCode: '',
        city: '',
        sendBack: null,
        agreement: false,
        invoice: this.state.invoice,
        invoiceDetails: {
          name: '',
          nip: '',
          street: '',
          streetNumber: '',
          city: '',
          postalCode: '',
        }
      };
    }
  }

  getUserDetails = () => {
    return {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      street: this.state.street,
      streetNumber: this.state.streetNumber,
      postalCode: this.state.postalCode,
      city: this.state.city,
      sendBack: this.state.sendBack,
      invoice: this.state.invoice,
      invoiceDetails: this.state.invoice ? {
        name: this.state.invoiceDetails.name,
        nip: this.state.invoiceDetails.nip,
        street: this.state.invoiceDetails.street,
        streetNumber: this.state.invoiceDetails.streetNumber,
        city: this.state.invoiceDetails.city,
        postalCode: this.state.invoiceDetails.postalCode
      } : null
    };
  };

  saveToLocalStorage = () => {
    localStorage.setItem('address', JSON.stringify(this.getUserDetails()));
  };

  render() {
    return <div className="container order-form">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="order-form-title" style={{paddingTop: '30px'}}>
            Twoje dane
          </div>
          <div className="order-section row no-gutters">
            <div className="col-md-6">
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="surname">Nazwisko</label>
              <input
                type="text"
                id="surname"
                value={this.state.surname}
                onChange={(e) => this.setState({surname: e.target.value})}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone">Numer telefonu</label>
              <input
                type="phone"
                id="phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </div>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 ">
          <div className="order-form-title">
            Adres
          </div>
          <div className="order-section row no-gutters">
            <div className="col-md-6">
              <label htmlFor="street">Ulica</label>
              <input
                type="text"
                id="street"
                value={this.state.street}
                onChange={(e) => this.setState({street: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street-number">Numer ulicy/lokalu</label>
              <input
                type="text"
                id="street-number"
                value={this.state.streetNumber}
                onChange={(e) => this.setState({streetNumber: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city">Miasto</label>
              <input
                type="text"
                id="city"
                value={this.state.city}
                onChange={(e) => this.setState({city: e.target.value})}
              />
            </div>
            <div className="col-md-8 agreement">
              <div className="order-section" style={{paddingBottom: '0px', paddingLeft: '15px'}}>
                <input
                  type="checkbox"
                  id="invoice"
                  style={{marginBottom: '0px'}}
                  value={this.state.invoice} onChange={() =>
                  this.setState({invoice: !this.state.invoice})
                }/>
                <label htmlFor="invoice">Prosze o przeslanie faktury VAT</label>
              </div>
            </div>
            {this.state.invoice &&
            <div className="order-section row invoice">
              <div className="col-md-6">
                <label htmlFor="name">Nazwa Firmy</label>
                <input
                  type="text"
                  id="companyName"
                  value={this.state.invoiceDetails.name}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, name: e.target.value}})}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname">NIP</label>
                <input
                  type="text"
                  id="nip"
                  value={this.state.invoiceDetails.nip}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, nip: e.target.value}})}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Ulica</label>
                <input
                  type="text"
                  id="companyStreet"
                  value={this.state.invoiceDetails.street}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, street: e.target.value}})}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Numer Ulicy/lokalu</label>
                <input
                  type="text"
                  id="companyStreet"
                  value={this.state.invoiceDetails.streetNumber}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, streetNumber: e.target.value}})}
                />
              </div>
              <div className="col-12 col-md-3">
                <label htmlFor="email">Kod Pocztowy</label>
                <input
                  type="text"
                  id="companyPostalCode"
                  value={this.state.invoiceDetails.postalCode}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, postalCode: e.target.value}})}
                />
              </div>
              <div className="col-12 col-md-9">
                <label htmlFor="email">Miasto</label>
                <input
                  type="text"
                  id="companyCity"
                  value={this.state.invoiceDetails.city}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, city: e.target.value}})}
                />
              </div>
            </div>
            }
          </div>
        </div>
        <div className="col-md-8 offset-md-2 ">
          <div className="order-section">
            <span className="section-title">Jak mamy odesłać Twoje buty?</span>
            <CustomSelect
              model={this.state.sendBack}
              callback={(option) => this.setState({sendBack: option.value})}
              placeholder="Wybierz"
              options={[
                {value: 1, label: '1'},
                {value: 2, label: '2'},
                {value: 3, label: '3'},
              ]}
            />
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
          <div className="orderFormFooter col-md-12">
            <ButtonsRow>
              <Route render={({history}) => (
                <ForwardButton
                  text="Dalej"
                  theme="black"
                  onClick={() => {
                    this.saveToLocalStorage();
                    history.push({pathname: '/summary'});
                  }}
                  forward
                />
              )}/>
              <Route render={({history}) => (
                <ForwardButton
                  text="Wtecz"
                  theme="white"
                  onClick={() => {
                    history.push({pathname: '/cart'});
                  }}
                />
              )}/>
            </ButtonsRow>
          </div>
        </div>
      </div>
    </div>;
  }
};

export default UserDetails;
