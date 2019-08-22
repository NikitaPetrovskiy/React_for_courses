// https://stackblitz.com/edit/react-675wat?file=index.js
// styles.css https://www.w3schools.com/howto/howto_css_outline_buttons.asp
import React, { Component } from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import {Button} from './Components/Button';
// import Icon from './Components/Icon';

//classes for button
const INFO = 'info';
const SUCCES = 'success';
const WARNING = 'warning';
const DANGER = "danger";
const DEFAULT = 'default';
//classes for loader icons
const REFRESH = 'refresh';
const SPINNER = 'spinner';
const CIRCLE = 'circle-o-notch';
//classes for image icon
const HOME_ICON = 'home';
const TRASH_ICON = 'trash';
const CLOSE_ICON = 'close';
const FOLDER_ICON = 'folder';
//text for button
const HOME = 'HOME';
const MENU = 'MENU';
const CLOSE = 'CLOSE';
const FOLDER = 'FOLDER';

    const App = (
        <div>
            <Button classBtn={INFO} radius={10} text={HOME} loader={SPINNER} icon={HOME_ICON}>
                {/*<Icon loader={SPINNER} />*/}
                {/*<Icon icon={HOME_ICON} />*/}
            </Button>
            <Button classBtn={SUCCES} radius={5} text={MENU}/>
            <Button classBtn={WARNING} icon={TRASH_ICON} />
            <Button classBtn={DANGER} radius={15} icon={CLOSE_ICON} loader={CIRCLE} text={CLOSE} />
            <Button classBtn={DEFAULT} icon={FOLDER_ICON} loader={REFRESH} radius={50} text={FOLDER} />
        </div>
    );

    render(App, document.getElementById('root'));

serviceWorker.unregister();

