import React, { Component } from 'react';
import '../../scss/order-form.css';
import RadioInputSection from '../shared/inputs/radio-input-section';
import RadioInput from '../shared/inputs/radio-input';
import CustomSelect from '../shared/select/select';
import { Route } from 'react-router-dom';
import ButtonsRow from '../shared/buttons/buttons-row/ButtonsRow';
import ForwardButton from '../shared/buttons/navigation-buttons/forwardButton';
import { rubberPricing } from '../../constants/pricing';
import { additionalOptions } from '../../constants/additionalOptions';
import { updateCart } from '../../redux/actions';
import Order from '../order/order';
import { connect } from 'react-redux';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.history.location.state
      && this.props.history.location.state.orderToEdit
    ) {
      const itemToEdit = this.getOrderToEdit();
      this.state = {
        orderType: itemToEdit.orderType,
        rubber: rubberPricing.filter(rubber => rubber.label === itemToEdit.orderProps[0].name)[0],
        edgeReplacement: itemToEdit.orderProps[1] !== null ? itemToEdit.orderProps[1].value : 2,
        edgeThickness: itemToEdit.orderProps[1] !== null ? itemToEdit.orderProps[1].thicknessValue : null,
        additionalOptions: itemToEdit.additionalOptions,
        description: itemToEdit.description
      };
    } else {
      this.state = {
        rubber: rubberPricing[0],
        edgeReplacement: 0,
        edgeThickness: 0,
        additionalOptions: null,
        description: '',
      };
    }
  }

  getCartItemsNumber = () => {
    if (localStorage.getItem('cart'))
      return JSON.parse(localStorage.getItem('cart')).length;
    return 0;
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getOrderToEdit = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart[this.props.history.location.state.orderToEdit - 1];
  };

  getOrderDetails = () =>
    ({
      orderType: this.props.history.location.state
        && this.props.history.location.state.orderToEdit
        ? this.state.orderType
        : this.props.history.location.state.orderType,
      orderProps: [
        { name: this.state.rubber.label, price: this.state.rubber.rubber },
        this.state.edgeReplacement === 0 ?
          {
            name: `Wymiana rantów (${this.state.rubber.edgeThickness[this.state.edgeThickness].label})`,
            value: this.state.edgeReplacement,
            thicknessValue: this.state.edgeThickness,
            price: this.state.rubber.edgeReplacement.value + this.state.rubber.edgeThickness[this.state.edgeThickness].value
          } : null,
      ],
      additionalOptions: this.state.additionalOptions,
      description: this.state.description,
    });


  saveToLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart === null || JSON.parse(cart).length === 0) {
      const arr = [];
      arr.push(this.getOrderDetails());
      cart = arr;
    } else {
      cart = JSON.parse(cart);
      if (this.props.history.location.state.orderToEdit) {
        cart[this.props.history.location.state.orderToEdit - 1] = this.getOrderDetails();
      } else {
        cart.push(this.getOrderDetails());
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  getRubberNames = () => {
    console.log(rubberPricing.map(item => item));
    return rubberPricing.map(item => item);
  };

  render() {
    return (
      <div className="container order-form">
        <div >
          <div className=" col-sm-10 col-md-10 col-lg-8 offset-md-2">
            <span className="order-form-title">Szczegóły naprawy</span>
            <div className="order-section">
              <span className="section-title">Wymiana podeszwy - rodzaj gumy(*typowe gumy)</span>
              <div className="col-md-10" style={{ padding: 0 }}>
                <CustomSelect
                  model={this.state.rubber}
                  callback={(option) => {
                    console.log(option);
                    this.setState({ rubber: option });
                  }}
                  placeholder={"Wybierz rodzaj gumy"}
                  options={this.getRubberNames()}
                  isValid={true}
                />
              </div>
            </div>
            <div className="order-section">
              <span className="section-title">Wymiana rantów</span>
              <RadioInputSection>
                <RadioInput
                  label={`Tak - ${rubberPricing.filter(item => item.value === this.state.rubber.value)[0].edgeReplacement.value}`}
                  value={0}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({ edgeReplacement: 0 })}
                />
                <RadioInput
                  label="Nie"
                  value={1}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({ edgeReplacement: 1 })} />
                <RadioInput
                  label="Wedle uznania"
                  value={2}
                  model={this.state.edgeReplacement}
                  callback={() => this.setState({ edgeReplacement: 2 })} />
              </RadioInputSection>
            </div>
            <div className="order-section">
              <span className="section-title">Grubość rantów</span>
              <RadioInputSection>
                <RadioInput label="Standardowa" value={0} model={this.state.edgeThickness}
                  callback={() => this.setState({ edgeThickness: 0 })} />
                <RadioInput label="Pogrubiona" value={1} model={this.state.edgeThickness}
                  callback={() => this.setState({ edgeThickness: 1 })} />
                <RadioInput label="Extra gruba" value={2} model={this.state.edgeThickness}
                  callback={() => this.setState({ edgeThickness: 2 })} />
              </RadioInputSection>
            </div>
            <div className="order-section">
              <span className="section-title">Dodatkowe opcje naprawy</span>
              <div className="col-md-10" style={{ padding: 0 }}>
                <CustomSelect
                  model={this.state.additionalOptions}
                  callback={(option) => this.setState({ additionalOptions: option })}
                  placeholder={"Brak"}
                  options={this.props.history.location.state
                    && this.props.history.location.state.orderToEdit ? additionalOptions[this.state.orderType]
                    : additionalOptions[this.props.history.location.state.orderType]}
                  isValid={true}
                />
              </div>
            </div>
            <div className="order-section">
              <div className="section-title">Opis (model buta, rozmiar), inne naprawy z cennika, itp.*</div>
              <div className="col-md-10" style={{ padding: 0 }}>
                <textarea value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
              </div>
            </div>
            <div className="note">
              <p>* Prosimy podać inne wymagane naprawy w polu "Opis" !</p>
              <p>* Dodając kilka par do koszyka prosimy dokładnie opisać poszczególne buty!</p>
            </div>
          </div>
        </div>
        <div className="orderFormFooter col-md-8 offset-md-2">
          <Route render={({ history }) => (
            <ButtonsRow>
              <ForwardButton
                text="Dodaj do koszyka"
                theme="black"
                onClick={() => {
                  this.saveToLocalStorage();
                  this.props.updateCart(this.getCartItemsNumber());
                  history.push({ pathname: '/cart' }
                  );
                }}
                forward
              />
              <ForwardButton
                text="Wtecz"
                theme="white"
                onClick={() => history.push('/order')}
              />
            </ButtonsRow>
          )} />
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => ({
  updateCart: (itemsInCart) => {
    dispatch(updateCart(itemsInCart));
  }
});


export default connect(null, matchDispatchToProps)(OrderForm);
