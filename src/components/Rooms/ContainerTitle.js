import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import ThemeContext from '../../context/ThemeContext';
import { lightGreen, lime, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    textTransform: "capitalize",
  },
  socketState: ({ state, darkMode }) => ({
    height: theme.spacing(1.75),
    width: theme.spacing(1.75),
    marginLeft: theme.spacing(1),
    border: "1px solid black",
    borderRadius: 9999,
    backgroundColor: 
      state 
      ? ( darkMode ? lime["A700"] : lightGreen["A700"] ) 
      : red["A700"],
    color: 'transparent',
  })
}))

const ContainerTitle = ({ name, id, state }) => {
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles({ state, darkMode });

  return (
    <>
      <Typography className={classes.title} align="center" variant="h5" color="textPrimary">
        <span >{name}</span>
        <div className={classes.socketState}> a</div>
      </Typography>
      <Typography align="center" gutterBottom color="textSecondary">
        <small>Id: {id}</small>
      </Typography>
    </>
  )
}

export default ContainerTitle

ContainerTitle.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}