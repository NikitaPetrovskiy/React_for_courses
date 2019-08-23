// https://stackblitz.com/edit/react-675wat?file=index.js
// styles.css https://www.w3schools.com/howto/howto_css_outline_buttons.asp
import React from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { Button, KINDS } from './Components/Button/index';
import { ICONS_IMG, ICONS_LOAD } from './Components/Icon/index';
import { IconLoader } from './Components/IconLoader/index';

    const App = (props) => {
       return (
           <div>
               <Button kind={KINDS.SUCCES}>
                   <IconLoader loader={ICONS_LOAD.CIRCLE}/>
                   <IconLoader icon={ICONS_IMG.HOME_ICON}/>
                   Click me
               </Button>
               <Button kind={KINDS.DEFAULT}>
                   <IconLoader loader={ICONS_LOAD.REFRESH} />
                   <IconLoader icon={ICONS_IMG.FOLDER_ICON} />
                   Loading...
               </Button>
               <Button kind={KINDS.INFO} radius={10} >
                   <IconLoader loader={ICONS_LOAD.SPINNER} />
                   <IconLoader icon={ICONS_IMG.HOME_ICON} />
                   HOME
               </Button>
               <Button kind={KINDS.SUCCES} radius={5}>
                   MENU
               </Button>
               <Button kind={KINDS.WARNING} >
                   <IconLoader icon={ICONS_IMG.TRASH_ICON} />
               </Button>
               <Button kind={KINDS.DANGER} radius={15}>
                <IconLoader loader={ICONS_LOAD.CIRCLE} />
                <IconLoader icon={ICONS_IMG.CLOSE_ICON} />
                CLOSE
               </Button>
            <Button kind={KINDS.DEFAULT} radius={50}>
                <IconLoader loader={ICONS_LOAD.REFRESH} />
                <IconLoader icon={ICONS_IMG.FOLDER_ICON} />
                FOLDER
            </Button>
        </div>
       )
    };

    render(<App />, document.getElementById('root'));

serviceWorker.unregister();

