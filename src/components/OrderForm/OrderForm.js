import React, {Component} from 'react';
import '../../scss/order-form.css';
import RepairDetails from './RepairDetails';
import UserDetails from './UserDetails';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderStep: 0,
    };
  }

  render() {
    return (
      <div className="container order-form">
        {this.state.orderStep === 0 && <RepairDetails />}
        {this.state.orderStep === 1 && <UserDetails />}
        <div className="orderFormFooter col-md-10 offset-md-1">
          <div className="navigation">
            <button
              className="forward"
              onClick={() => this.setState({orderStep: this.state.orderStep +1})}
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
