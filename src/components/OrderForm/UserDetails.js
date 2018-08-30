import React, {Component} from 'react';
import CustomSelect from '../shared/select/select';
import {Route} from 'react-router-dom';
import '../../scss/order-form.css';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
class UserDetails extends Component {
  constructor(props) {
    super(props);
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
      companyName: '',
      companyStreet: '',
      companyStreetNumber: '',
      companyCity: '',
      nip: '',
      companyPostalCode: '',

    }
  }

  getOrderDetails = () => {
    return {
      orderType: this.props.history.location.state.orderType,
      orderDetails: {
        rubberType: this.props.history.location.state.rubberType,
        edgeReplacement: this.props.history.location.state.edgeReplacement,
        edgeThickness: this.props.history.location.state.edgeThickness,
        additionalOptions: this.props.history.location.state.additionalOptions,
        description: this.props.history.location.state.description,
      },
      userDetails: {
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
          name: this.state.companyName,
          nip: this.state.nip,
          street: this.state.companyStreet,
          streetNumber: this.state.companyStreetNumber,
          city: this.state.companyCity,
          postalCode: this.state.companyPostalCode
        } : null
      }
    }
  };

  saveToLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart === null || JSON.parse(cart).length === 0) {
      const arr = [];
      arr.push(this.getOrderDetails());
      localStorage.setItem('cart', JSON.stringify(arr));
    } else {
      cart = JSON.parse(cart);
      cart.push(this.getOrderDetails());
    }

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
                  value={this.state.companyName}
                  onChange={(e) => this.setState({companyName: e.target.value})}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname">NIP</label>
                <input
                  type="text"
                  id="nip"
                  value={this.state.nip}
                  onChange={(e) => this.setState({nip: e.target.value})}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Ulica</label>
                <input
                  type="text"
                  id="companyStreet"
                  value={this.state.companyStreet}
                  onChange={(e) => this.setState({companyStreet: e.target.value})}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Numer Ulicy/lokalu</label>
                <input
                  type="text"
                  id="companyStreet"
                  value={this.state.companyStreetNumber}
                  onChange={(e) => this.setState({companyStreetNumber: e.target.value})}
                />
              </div>
              <div className="col-12 col-md-3">
                <label htmlFor="email">Kod Pocztowy</label>
                <input
                  type="text"
                  id="companyPostalCode"
                  value={this.state.companyPostalCode}
                  onChange={(e) => this.setState({companyPostalCode: e.target.value})}
                />
              </div>
              <div className="col-12 col-md-9">
                <label htmlFor="email">Miasto</label>
                <input
                  type="text"
                  id="companyCity"
                  value={this.state.companyCity}
                  onChange={(e) => this.setState({companyCity: e.target.value})}
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
                  onClick={() =>  this.saveToLocalStorage()}
                  forward
                />
              )} />
              <Route render={({history}) => (
                <ForwardButton
                  text="Wtecz"
                  theme="white"
                  onClick={() =>  this.saveToLocalStorage()}
                />
              )} />
            </ButtonsRow>
          </div>
        </div>
      </div>
    </div>
  }
};

export default UserDetails;
