import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class CustomSelect extends Component {
  state = {
    selectedOption: '',
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        clearable={false}
        placeholder={"Wybierz rodzaj gumy"}
        className="friction-custom-select"
        optionClassName="friction-custom-select-option"
        name="form-field-name"
        inputProps={{readOnly: true}}
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

export default CustomSelect;
