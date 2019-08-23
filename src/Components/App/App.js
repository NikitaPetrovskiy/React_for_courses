import React from 'react';
import { Button, KINDS } from '../Button/index';
import { ICONS_IMG, ICONS_LOAD } from '../Icon/index';
import { IconContainer } from '../IconContainer/index';

export const App = (props) => {
  return (
      <div>
        <Button kind={KINDS.SUCCES}>
          <IconContainer loader={ICONS_LOAD.CIRCLE}/>
          <IconContainer icon={ICONS_IMG.HOME_ICON}/>
          Click me
        </Button>
        <Button kind={KINDS.DEFAULT}>
          <IconContainer loader={ICONS_LOAD.REFRESH} />
          <IconContainer icon={ICONS_IMG.FOLDER_ICON} />
          Loading...
        </Button>
        <Button kind={KINDS.INFO} radius={10} >
          <IconContainer loader={ICONS_LOAD.SPINNER} />
          <IconContainer icon={ICONS_IMG.HOME_ICON} />
          HOME
        </Button>
        <Button kind={KINDS.SUCCES} radius={5}>
          MENU
        </Button>
        <Button kind={KINDS.WARNING} >
          <IconContainer icon={ICONS_IMG.TRASH_ICON} />
        </Button>
        <Button kind={KINDS.DANGER} radius={15}>
          <IconContainer loader={ICONS_LOAD.CIRCLE} />
          <IconContainer icon={ICONS_IMG.CLOSE_ICON} />
          CLOSE
        </Button>
        <Button kind={KINDS.DEFAULT} radius={50}>
          <IconContainer loader={ICONS_LOAD.REFRESH} />
          <IconContainer icon={ICONS_IMG.FOLDER_ICON} />
          FOLDER
        </Button>
      </div>
  )
};
