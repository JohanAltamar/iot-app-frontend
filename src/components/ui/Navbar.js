import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logoutUser } from '../../api/users';
import ThemeContext from '../../context/ThemeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: props => ({
    backgroundColor: props.darkMode
      ? theme.palette.primary.dark : theme.palette.primary.main
  }),
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ handleToggleMenu }) {
  const { sessionToken, setSessionToken } = useContext(UserContext)
  const { darkMode } = useContext(ThemeContext)
  const classes = useStyles({ darkMode });

  const handleLogout = async () => {
    const resp = await logoutUser(sessionToken);
    console.log(resp)
    if (resp?.msg) {
      setSessionToken(null);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        className={classes.appBar} 
        elevation={darkMode ? 0 : 4}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu" onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="textPrimary">
            Smart Home
          </Typography>
          <IconButton edge="end" color="default" aria-label="logout" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}