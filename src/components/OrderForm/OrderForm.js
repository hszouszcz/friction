import React, {Component} from 'react';
import '../../scss/order-form.css';
import RadioInputSection from '../shared/inputs/radio-input-section';
import RadioInput from '../shared/inputs/radio-input';
import CustomSelect from '../shared/select/select';
import {Route} from 'react-router-dom';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import {rubberPricing} from '../../constants/pricing';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      rubber: rubberPricing[0],
      edgeReplacement: 0,
      edgeThickness: 0,
      additionalOptions: null,
      description: '',
    };
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getOrderDetails = () => {
    return {
      orderType: this.props.history.location.state.orderType,
      orderProps: [
        {name: this.state.rubber.label, price: this.state.rubber.rubber},
        this.state.edgeReplacement === 0 ?
          {name: `Wymiana rantów (${this.state.rubber.edgeThickness[this.state.edgeReplacement].label})`,
            price: this.state.edgeReplacement + this.state.rubber.edgeThickness[this.state.edgeReplacement].price} : null,
      ],
      additionalOptions: this.state.additionalOptions,
      description: this.state.description,
    }
  };

  getRubberNames = () => {
    console.log(rubberPricing.map(item => item));
    return rubberPricing.map(item => item);
  };

  render() {
    return (
      <div className="container order-form">
        <div className="row">
          <div className="col-md-10 offset-md-2">
            <span className="order-form-title">Szczegóły naprawy</span>
            <div className="order-section">
              <span className="section-title">Wymiana podeszwy - rodzaj gumy(*typowe gumy)</span>
              <CustomSelect
                model={this.state.rubber}
                callback={(option) => { console.log(option); this.setState({rubber: option})}}
                placeholder={"Wybierz rodzaj gumy"}
                options={this.getRubberNames()}
              />
            </div>
            <div className="order-section">
              <span className="section-title">Wymiana rantów</span>
              <RadioInputSection>
                <RadioInput
                  label={`Tak - ${rubberPricing.filter(item => item.value === this.state.rubber.value)[0].edgeReplacement}`}
                  value={0}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({edgeReplacement: 0})}
                />
                <RadioInput
                  label="Nie"
                  value={1}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({edgeReplacement: 1})}/>
                <RadioInput
                  label="Wedle uznania"
                  value={2}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({edgeReplacement: 2})}/>
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
                  {value: 1, label: '1', price: 100},
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
        <div className="orderFormFooter col-md-8 offset-md-2">
          <Route render={({history}) => (
            <ButtonsRow>
              <ForwardButton
                text="Dodaj do koszyka"
                theme="black"
                onClick={() => { history.push({pathname: '/user-details', state: this.getOrderDetails()}) }}
                forward
              />
              <ForwardButton
                text="Wtecz"
                theme="white"
                onClick={() => history.push('/order-type')}
              />
            </ButtonsRow>
          )} />
        </div>
      </div>
    );
  }
}

export default OrderForm;
