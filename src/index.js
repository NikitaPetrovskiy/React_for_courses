// https://stackblitz.com/edit/react-675wat?file=index.js
// styles.css https://www.w3schools.com/howto/howto_css_outline_buttons.asp
import React, { Component } from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import {Button, KINDS, TEXT_FOR_BUTTON} from './Components/Button';
// import Icon from './Components/Icon';

//classes for loader icons
const ICONS_LOAD = Object.freeze({
    REFRESH:'refresh', SPINNER: 'spinner', CIRCLE: 'circle-o-notch'
})
//classes for image icon
const ICONS_IMG = Object.freeze({
    HOME_ICON: 'home', TRASH_ICON: 'trash', CLOSE_ICON: 'close', FOLDER_ICON: 'folder'
})

    const App = (
        <div>
            <Button kind={KINDS.INFO} radius={10} text={TEXT_FOR_BUTTON.HOME}
                    loader={ICONS_LOAD.SPINNER} icon={ICONS_IMG.HOME_ICON}>
                {/*<Icon loader={SPINNER} />*/}
                {/*<Icon icon={HOME_ICON} />*/}
            </Button>
            <Button kind={KINDS.SUCCES} radius={5} text={TEXT_FOR_BUTTON.MENU}/>
            <Button kind={KINDS.WARNING} icon={ICONS_IMG.TRASH_ICON} />
            <Button kind={KINDS.DANGER} radius={15} icon={ICONS_IMG.CLOSE_ICON}
                    loader={ICONS_LOAD.CIRCLE} text={TEXT_FOR_BUTTON.CLOSE} />
            <Button kind={KINDS.DEFAULT} icon={ICONS_IMG.FOLDER_ICON} loader={ICONS_LOAD.REFRESH}
                    radius={50} text={TEXT_FOR_BUTTON.FOLDER} />
        </div>
    );

    render(App, document.getElementById('root'));

serviceWorker.unregister();

