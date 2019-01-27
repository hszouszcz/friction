import validator from 'validator';
import React, {Component} from 'react';
import Customselect from '../shared/select/select';
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
      this.state ={...this.resetValidation(),  ...JSON.parse(localStorage.getItem('address'))}
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
        },
        nameValid: true,
        surnameValid: true,
        emailValid: true,
        phoneValid: true,
        streetValid: true,
        streetNumberValid: true,
        postalCodeValid: true,
        cityValid: true,
        agreementValid: true,
        invoiceNameValid: true,
        invoiceNipValid: true,
        invoiceStreetValid: true,
        invoiceStreetNumberValid: true,
        invoiceCityValid: true,
        invoicePostalCodeValid: true,
      };
    }
  }

  validateUser = () => {
    const validation = {
      nameValid: !validator.isEmpty(this.state.name),
      surnameValid: !validator.isEmpty(this.state.surname, { ignore_whitespace: true }),
      emailValid: validator.isEmail(this.state.email),
      phoneValid: validator.isMobilePhone(this.state.phone),
      streetValid: !validator.isEmpty(this.state.street, { ignore_whitespace: true }),
      streetNumberValid: !validator.isEmpty(this.state.streetNumber, { ignore_whitespace: true }),
      cityValid: !validator.isEmpty(this.state.city, { ignore_whitespace: true }),
      postalCodeValid: validator.isPostalCode(this.state.postalCode, 'any')
    }
    this.setState({
    ...validation
    })
    console.log(validation);
    console.log(Object.values(validation).every(value => value));
    return Object.values(validation).every(value => value)
  }

  validateInvoiceData = () => {
    const validation = {
      invoiceNameValid: !validator.isEmpty(this.state.invoiceDetails.name, { ignore_whitespace: true }),
      invoiceNipValid: validator.isNumeric(this.state.invoiceDetails.nip),
      invoiceStreetValid: !validator.isEmpty(this.state.invoiceDetails.street, { ignore_whitespace: true }),
      streetNumberValid: !validator.isEmpty(this.state.invoiceDetails.streetNumber, { ignore_whitespace: true }),
      invoiceCityValid: !validator.isEmpty(this.state.invoiceDetails.city, { ignore_whitespace: true }),
      invoicePostalCodeValid: validator.isPostalCode(this.state.invoiceDetails.postalCode, 'any')
    }
    this.setState( ...validation);
    return Object.values(validation).every(value => value)
  }

  resetValidation = () => ({
    nameValid: true,
    surnameValid: true,
    emailValid: true,
    phoneValid: true,
    streetValid: true,
    streetNumberValid: true,
    postalCodeValid: true,
    cityValid: true,
    agreementValid: true,
    invoiceNameValid: true,
    invoiceNipValid: true,
    invoiceStreetValid: true,
    invoiceStreetNumberValid: true,
    invoiceCityValid: true,
    invoicePostalCodeValid: true,
  })




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

  goNext = () => {
   return <ForwardButton
      text="Dalej"
      theme="black"
      onClick={() => {
        this.validateUser();
        // this.saveToLocalStorage();
        // history.push({pathname: '/summary'});
      }}
      forward
    />
 }

 errorStyles = () => (
   { borderColor: this.state.nameValid ? null : 'rgba(255, 0, 0, 0.3)', boxShadow: this.state.nameValid ? null : '0px 0px 1px 1px rgba(255, 0, 0, 0.3)' }
 )

  saveToLocalStorage = () => {
    localStorage.setItem('address', JSON.stringify(this.getUserDetails()));
  };

  render() {
    return (<div className="container order-form">

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="order-form-title" style={{paddingTop: '30px'}}>
            Twoje dane
          </div><div className="order-section row no-gutters">
            <div className="col-md-6">
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
                style={this.errorStyles()}
            />
            </div>
            <div className="col-md-6">
              <label htmlFor="surname">Nazwisko</label>
              <input
                type="text"
                id="surname"
                name="surname"
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
                validations={[email, required]}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="phone">Numer telefonu</label>
              <input
                type="phone"
                id="phone"
                name="phone"
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
                name="street"
                value={this.state.street}
                onChange={(e) => this.setState({street: e.target.value})}

              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street-number">Numer ulicy/lokalu</label>
              <input
                type="text"
                id="street-number"
                name="street-number"
                value={this.state.streetNumber}
                onChange={(e) => this.setState({streetNumber: e.target.value})}

              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city">Miasto</label>
              <input
                type="text"
                id="city"
                name="city"
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
                  name="companyName"
                  value={this.state.invoiceDetails.name}
                  onChange={(e) => this.setState({invoiceDetails: {...this.state.invoiceDetails, name: e.target.value}})}
                  validations={[invoiceRequired]}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname">NIP</label>
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
            <select name='shipping' value='' validations={[required]}>
              <option value=''>Choose shipping</option>
              <option value='1'>Bocian</option>
              <option value='2'>Rakieta</option>
              <option value='3'>New York</option>
            </select>
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
                    this.validateUser();
                    //this.saveToLocalStorage();
                    //history.push({pathname: '/summary'});
                  }}
                  forward
                />
              )}/>
              <Route render={({history}) => (
                <ForwardButton
                  text="Wtecz"
                  theme="white"
                  onClick={() => {
                    this.validateUser()
                    history.push({pathname: '/cart'});
                  }}
                />
              )}/>
            </ButtonsRow>
          </div>
        </div>
      </div>
    </div>);
  }
};

export default UserDetails;
