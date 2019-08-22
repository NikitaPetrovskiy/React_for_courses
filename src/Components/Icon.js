import React from 'react';
import '../index.css';

const Icon = (props) => (
    <i className={ props.loader ? "fa fa-" + props.loader + " fa-spin" :
        props.icon ? "fa fa-" + props.icon : null }></i>
);

export default Icon;