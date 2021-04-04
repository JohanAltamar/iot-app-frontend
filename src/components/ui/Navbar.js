import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logoutUser } from '../../api/users';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ handleToggleMenu }) {
  const classes = useStyles();
  const { sessionToken, setSessionToken } = useContext(UserContext)

  const handleLogout = async () => {
    const resp = await logoutUser(sessionToken);
    console.log(resp)
    if (resp?.msg) {
      setSessionToken(null);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Smart Home
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="logout" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}