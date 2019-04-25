import React from 'react';
import './checkbox.style.css';
import strings from '../../assets/locales/index';
const CheckBox = ({ value, onClick, label, id }) => (
    <div className="agreement-checkbox">
        <input id={id} type="checkbox" name={id} onClick={onClick} checked={value} value={value} />
        <label htmlFor={id}>{label}</label>
    </div>
)


export default CheckBox;