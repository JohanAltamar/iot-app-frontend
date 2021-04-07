import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import WifiIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import LightModeIcon from '@material-ui/icons/Brightness7';
import DarkModeIcon from '@material-ui/icons/BrightnessLow';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { useHistory, useLocation } from 'react-router';
import SocketContext from '../../context/SocketContext';
import { useContext } from 'react';


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

  const handleRedirect = (pathName) => (event) => {
    history.push(pathName)
  }

  const handleToggleSokectsConnection = (event) => {
    setSocketConnection(!socketConnection)
  }

  const handleToggleDarkMode = () => {

  }

  return (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={handleRedirect("/")}>
          <ListItemIcon> <AppsIcon /> </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button onClick={handleRedirect("/profile")}>
          <ListItemIcon> <PersonIcon /> </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItem>

        {
          // ONLY DISPLAYED WITH ROOMS URLs
          <ListItem button onClick={handleToggleSokectsConnection} disabled={!pathname.includes("/rooms/")}>
            <ListItemIcon>
              {
                socketConnection
                  ? <WifiOffIcon />
                  : <WifiIcon />
              }
            </ListItemIcon>
            <ListItemText primary={socketConnection ? "Disconnect Room" : "Connect Room"} />
          </ListItem>
        }

        <ListItem button onClick={handleToggleDarkMode} >
          <ListItemIcon> <LightModeIcon /> </ListItemIcon>
          <ListItemText primary={"Light Mode"} />
        </ListItem>

        <ListItem button onClick={handleToggleDarkMode} >
          <ListItemIcon> <DarkModeIcon /> </ListItemIcon>
          <ListItemText primary={"Dark Mode"} />
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
