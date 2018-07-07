import React, {Component} from 'react';
import '../../scss/order-form.css';
import RepairDetails from './RepairDetails';
import UserDetails from './UserDetails';
import RadioInputSection from '../shared/inputs/radio-input-section';
import RadioInput from '../shared/inputs/radio-input';
import CustomSelect from '../shared/select/select';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStep: 0,
      repairType: 0,
      rubberType: null,
      edgeReplacement: 0,
      edgeThickness: 0,
      additionalOptions: 0,
      description: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      street: '',
      streetNumber: '',
      city: '',
      sendBack: null,
      agreement: false,
    };
  }

  render() {
    return (
      <div className="container order-form">
        {this.state.orderStep === 0
        && <div className="row">
          <div className="col-md-10 offset-md-1">
            <span className="order-form-title">Typ naprawy</span>
            <div className="order-section">
              <RadioInputSection>
                <RadioInput label="Buty wspinaczkowe" value={0} model={this.state.repairType} callback={() => this.setState({repairType: 0})}/>
                <RadioInput label="Buty trekkingowe" value={1} model={this.state.repairType} callback={() => this.setState({repairType: 1})}/>
              </RadioInputSection>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <span className="order-form-title">Szczegóły naprawy</span>
            <div className="order-section">
              <span className="section-title">Wymiana podeszwy - rodzaj gumy(*typowe gumy)</span>
              <CustomSelect
                model={this.state.rubberType}
                callback={(option) => this.setState({rubberType: option})}
                placeholder={"Wybierz rodzaj gumy"}
                options={[
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                ]}
              />
            </div>
            <div className="order-section">
              <span className="section-title">Wymiana rantów</span>
              <RadioInputSection>
                <RadioInput label="Tak - 100PLN" value={0} model={this.state.edgeReplacement} callback={() => this.setState({edgeReplacement: 0})}/>
                <RadioInput label="Nie" value={1}  model={this.state.edgeReplacement} callback={() => this.setState({edgeReplacement: 1})}/>
                <RadioInput label="Wedle uznania" value={2} model={this.state.edgeReplacement} callback={() => this.setState({edgeReplacement: 2})}/>
              </RadioInputSection>
            </div>
            <div className="order-section">
              <span className="section-title">Grubość rantów</span>
              <RadioInputSection>
                <RadioInput label="Standardowa" value={0} model={this.state.edgeThickness} callback={() => this.setState({edgeThickness: 0})}/>
                <RadioInput label="Pogrubiona" value={1} model={this.state.edgeThickness} callback={() => this.setState({edgeThickness: 1})}/>
                <RadioInput label="Extra gruba" value={2} model={this.state.edgeThickness} callback={() => this.setState({edgeThickness: 2})}/>
              </RadioInputSection>
            </div>
            <div className="order-section">
              <span className="section-title">Dodatkowe opcje naprawy</span>
              <CustomSelect
                model={this.state.additionalOptions}
                callback={(option) => this.setState({additionalOptions: option})}
                placeholder={"Brak"}
                options={[
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                ]}
              />
            </div>
            <div className="order-section">
              <span className="section-title">Opis (model buta, rozmiar), inne naprawy z cennika, itp.*</span>
              <textarea value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
            </div>
            <div className="note">
              <p>* Prosimy podać inne wymagane naprawy w polu "Opis" !</p>
              <p>* Dodając kilka par do koszyka prosimy dokładnie opisać poszczególne buty!</p>
            </div>
          </div>
        </div>
        }
        {this.state.orderStep === 1
        && <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="order-form-title">
              Twoje dane
            </div>
            <div className="order-section row no-gutters">
              <div className="col-md-6">
                <label htmlFor="name">Imię</label>
                <input type="text" id="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="surname">Nazwisko</label>
                <input type="text" id="surname" value={this.state.surname} onChange={(e) => this.setState({surname: e.target.value})}/>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="phone">Numer telefonu</label>
                <input type="phone" id="phone" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} />
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
                <input type="text" id="street" value={this.state.street} onChange={(e) => this.setState({street: e.target.value})}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="street-number">Numer ulicy/lokalu</label>
                <input type="text" id="street-number" value={this.state.streetNumber} onChange={(e) => this.setState({streetNumber: e.target.value})}/>
              </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <div className="order-section">
              <span className="section-title">Jak mamy odesłać Twoje buty?</span>
              <CustomSelect
                model={this.state.sendBack}
                callback={(option) => this.setState({sendBack: option})}
                placeholder={"Wybierz"}
                options={[
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                  {value: 1, label: '1'},
                ]}
              />
            </div>
            <div className="col-12 agreement">
              <div className="order-section">
                <input type="checkbox" id="agreement" checked={this.state.agreement} value={this.state.agreement} onChange={(e) => this.setState({agreement: e.target.value})}/>
                <label htmlFor="agreement">Wyrażam zgodę na przetważanie i przetrzymywanie moich danych osobowych
                  niezbędnych do realizacji zamówienia przez Friction s.c. zgodnie z ustawą o ochronie danych osobowych z
                  dnia 29.08.1997r. (Dz. U. Nr 133, poz. 883). Dane te będą wykorzystywane w celu ewidencji sprzedaży i
                  kontaktu z nabywcą wyłącznie przez Friction s.c.</label>
              </div>
            </div>
          </div>
        </div>
        }
        <div className="orderFormFooter col-md-10 offset-md-1">
          <div className="navigation">
            <button
              className="forward"
              onClick={() => {
                console.log(this.state);
                return this.setState({orderStep: this.state.orderStep + 1});
              }}
            >
              <span>Dalej</span>
            </button>
            <button
              className="back"
              onClick={() => this.setState({orderStep: this.state.orderStep -1})}
            >
              <span>Wstecz</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderForm;
