import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const CustomSelect = (props) => (

    <div style={{ borderColor: props.isValid ? null : 'rgba(255, 0, 0, 0.3)', boxShadow: props.isValid ? null : '0px 0px 1px 1px rgba(255, 0, 0, 0.3)', paddingRight: 15}}>
      <Select
        clearable={false}
        placeholder={props.placeholder}
        className="friction-custom-select"
        optionClassName="friction-custom-select-option"
        name="form-field-name"
        inputProps={{ readOnly: true }}
        value={props.model}
        onChange={(option) => props.callback(option)}
        options={props.options}
      />
    </div>

);


export default CustomSelect;
