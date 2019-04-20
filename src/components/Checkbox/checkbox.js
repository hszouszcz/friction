import React from 'react';
import './checkbox.style.css';
import strings from '../../assets/locales/index';
const CheckBox = ({ value, onClick }) => {

    return (
        <div className="agreement-checkbox">
            <input id="agreement" type="checkbox" name="agreement" onClick={onClick} checked={value} value={value} />
            <label htmlFor="agreement">{strings.rodoAgreement}</label>
        </div>
    )
}

export default CheckBox;