import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const CustomSelect = (props) => (
  <div className="col-md-12 col-lg-11" style={{paddingLeft: 0}}>
    <Select
      clearable={false}
      placeholder={props.placeholder}
      className="friction-custom-select"
      optionClassName="friction-custom-select-option"
      name="form-field-name"
      inputProps={{readOnly: true}}
      value={props.model}
      onChange={(option) => props.callback(option)}
      options={props.options}
    />
  </div>
);


export default CustomSelect;
