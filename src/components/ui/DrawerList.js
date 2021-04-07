import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Apps, Person, Wifi, WifiOff, Brightness7 as LightModeIcon, BrightnessLow as DarkModeIcon, ExitToApp as LogoutIcon } from '@material-ui/icons';

import SocketContext from '../../context/SocketContext';
import ThemeContext from '../../context/ThemeContext';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const DrawerList = ({ toggleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  const { socketConnection, setSocketConnection } = useContext(SocketContext)
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const handleRedirect = (pathName) => (event) => {
    history.push(pathName)
  }

  const handleToggleSokectsConnection = (event) => {
    setSocketConnection(!socketConnection)
  }

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={handleRedirect("/")}>
          <ListItemIcon> <Apps /> </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button onClick={handleRedirect("/profile")}>
          <ListItemIcon> <Person /> </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItem>

        {
          // ONLY DISPLAYED WITH ROOMS URLs
          <ListItem button onClick={handleToggleSokectsConnection} disabled={!pathname.includes("/rooms/")}>
            <ListItemIcon>
              {
                socketConnection
                  ? <WifiOff />
                  : <Wifi />
              }
            </ListItemIcon>
            <ListItemText primary={socketConnection ? "Disconnect Room" : "Connect Room"} />
          </ListItem>
        }


        <ListItem button onClick={handleToggleDarkMode} >
          <ListItemIcon>
            {darkMode
              ? <LightModeIcon />
              : <DarkModeIcon />
            } </ListItemIcon>
          <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
        </ListItem>

        <ListItem button >
          <ListItemIcon> <LogoutIcon /> </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  )
};

export default DrawerList
