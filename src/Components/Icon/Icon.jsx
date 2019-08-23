import React from 'react';
import '../../index.css';

//classes for loader icons
export const ICONS_LOAD = Object.freeze({
    REFRESH:'refresh', SPINNER: 'spinner', CIRCLE: 'circle-o-notch'
})
//classes for image icon
export const ICONS_IMG = Object.freeze({
    HOME_ICON: 'home', TRASH_ICON: 'trash', CLOSE_ICON: 'close', FOLDER_ICON: 'folder'
})

export const Icon = (props) => {
    const ICON_SPIN = 'fa-spin';
    return <i className={ props.loader ? `fa fa-${props.loader} ${ICON_SPIN}` :
        props.icon ? `fa fa-${props.icon}` : null } />
};
