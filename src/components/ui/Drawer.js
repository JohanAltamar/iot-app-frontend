import { Drawer } from '@material-ui/core';
import DrawerList from './DrawerList';


export default function TempDrawer({ handleCloseMenu, state }) {
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    handleCloseMenu(open);
  };

  return (
    <div>
      <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)} transitionDuration={500}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}
