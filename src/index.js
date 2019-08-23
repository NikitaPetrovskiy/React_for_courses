import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './Components/App/index'

render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// https://stackblitz.com/edit/react-675wat?file=index.js
// styles.css https://www.w3schools.com/howto/howto_css_outline_buttons.asp