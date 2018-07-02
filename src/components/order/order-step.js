import React from 'react';

const OrderStep = (props) => (
 <div className="order-step col-lg-6">
    <div className="row">
        <div className="col-3 icon">
            <i className={props.icon}></i>
        </div>
        <div className="col-9">
            <div className="title">{props.title}</div>
            <div className="desc">{props.text}</div>
        </div>
    </div>
 </div>
);

export default OrderStep;