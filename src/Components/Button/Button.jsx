import React from 'react';
import '../../index.css';

// colors for button
export const KINDS = Object.freeze({
    INFO: 'info', SUCCES: 'success', WARNING: 'warning', DANGER: "danger", DEFAULT: 'default'
});

export const Button = (props) => {
    return (<button className={`btn ${props.kind}` || `btn default`} style={{borderRadius: props.radius}}>
        {props.children}
    </button>)
};
