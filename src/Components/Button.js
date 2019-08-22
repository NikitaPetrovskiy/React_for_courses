import React from 'react';
import '../index.css';

export const Button = (props) => (
    <button className={"btn " + props.classBtn} style={{borderRadius: props.radius}}>
        {props.loader ? <i className={"fa fa-" + props.loader + " fa-spin"}></i> : null}
        {props.icon ? <i className={"fa fa-" + props.icon}></i> : null}
        {props.text}
    </button>
);
