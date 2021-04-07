import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import WifiIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import LightModeIcon from '@material-ui/icons/Brightness7';
import DarkModeIcon from '@material-ui/icons/BrightnessLow';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const DrawerList = ({ toggleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = (pathName) => (event) => {
    history.push(pathName)
  }

  const handleToggleSokectsConnection = ( event )=> {

  }

  const handleToggleDarkMode = () => {

  }

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
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

        <ListItem button onClick={handleToggleSokectsConnection} >
          <ListItemIcon> <WifiOffIcon /> </ListItemIcon>
          <ListItemText primary={"Disconnect Room"} />
        </ListItem>

        <ListItem button onClick={handleToggleSokectsConnection} >
          <ListItemIcon> <WifiIcon /> </ListItemIcon>
          <ListItemText primary={"Connect Room"} />
        </ListItem>

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
