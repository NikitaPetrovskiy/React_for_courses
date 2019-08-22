import React from 'react';
import '../index.css';

export const KINDS = Object.freeze({
    INFO: 'info', SUCCES: 'success', WARNING: 'warning', DANGER: "danger", DEFAULT: 'default'
});
//text for button
export const TEXT_FOR_BUTTON = Object.freeze({
    HOME: 'HOME', MENU: 'MENU', CLOSE: 'CLOSE', FOLDER: 'FOLDER'
})

export const Button = (props) => (
    <button className={props.kind ? "btn " + props.kind : "btn default"} style={{borderRadius: props.radius}}>
        {props.loader && <i className={"fa fa-" + props.loader + " fa-spin"} />}
        {props.icon && <i className={"fa fa-" + props.icon} />}
        {props.text}
    </button>
);
