import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import validator from 'validator';
import React, {Component} from 'react';
import CustomSelect from '../shared/select/select';
import {Route} from 'react-router-dom';
import '../../scss/order-form.css';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

const invoiceRequired = (value) => {
  if (!value.toString().trim().length && this.state.invoice) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

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
        invoice: false,
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
      } : {
        name: '',
        nip: '',
        street: '',
        streetNumber: '',
        city: '',
        postalCode: ''
      }
    };
  };

  saveToLocalStorage = () => {
    localStorage.setItem('address', JSON.stringify(this.getUserDetails()));
  };

  render() {
    return (<div className="container order-form">
      <Form>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="order-form-title" style={{paddingTop: '30px'}}>
            Twoje dane
          </div><div className="order-section row no-gutters">
            <div className="col-md-6">
              <label htmlFor="name">Imię</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
                validations={[required]}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="surname">Nazwisko</label>
              <Input
                type="text"
                id="surname"
                name="surname"
                value={this.state.surname}
                onChange={(e) => this.setState({surname: e.target.value})}
                validations={[required]}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
                validations={[email, required]}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone">Numer telefonu</label>
              <Input
                type="phone"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
                validations={[required]}
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
              <Input
                type="text"
                id="street"
                name="street"
                value={this.state.street}
                onChange={(e) => this.setState({street: e.target.value})}
                validations={[required]}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street-number">Numer ulicy/lokalu</label>
              <Input
                type="text"
                id="street-number"
                name="street-number"
                value={this.state.streetNumber}
                onChange={(e) => this.setState({streetNumber: e.target.value})}
                validations={[required]}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city">Miasto</label>
              <Input
                type="text"
                id="city"
                name="city"
                value={this.state.city}
                onChange={(e) => this.setState({city: e.target.value})}
                validations={[required]}
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
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={this.state.invoiceDetails.name}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, name: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname">NIP</label>
                <Input
                  type="text"
                  id="nip"
                  name="nip"
                  value={this.state.invoiceDetails.nip}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, nip: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Ulica</label>
                <Input
                  type="text"
                  id="companyStreet"
                  name="companyStreet"
                  value={this.state.invoiceDetails.street}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, street: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Numer Ulicy/lokalu</label>
                <Input
                  type="text"
                  id="companyStreetNumber"
                  name="companyStreetNumber"
                  value={this.state.invoiceDetails.streetNumber}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, streetNumber: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-12 col-md-3">
                <label htmlFor="email">Kod Pocztowy</label>
                <Input
                  type="text"
                  id="companyPostalCode"
                  name="postalCode"
                  value={this.state.invoiceDetails.postalCode}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, postalCode: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-12 col-md-9">
                <label htmlFor="email">Miasto</label>
                <Input
                  type="text"
                  id="companyCity"
                  name="companyCity"
                  value={this.state.invoiceDetails.city}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, city: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
            </div>
            }
          </div>
        </div>
        <div className="col-md-8 offset-md-2 ">
          <div className="order-section">
            <span className="section-title">Jak mamy odesłać Twoje buty?</span>
            <Select name='shipping' value='' validations={[required]}>
              <option value=''>Choose shipping</option>
              <option value='1'>Bocian</option>
              <option value='2'>Rakieta</option>
              <option value='3'>New York</option>
            </Select>
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
      </div></Form>
    </div>);
  }
};

export default UserDetails;
