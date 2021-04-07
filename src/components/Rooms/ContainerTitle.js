import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    textTransform: "capitalize",
  },
  socketState: ({ state }) => ({
    height: theme.spacing(1.75),
    width: theme.spacing(1.75),
    marginLeft: theme.spacing(1),
    border: "1px solid black",
    borderRadius: 9999,
    backgroundColor: state ? 'green' : 'red',
    color: 'transparent',
  })
}))

const ContainerTitle = ({ name, id, state }) => {
  const classes = useStyles({ state });

  return (
    <>
      <Typography className={classes.title} align="center" variant="h5">
        <span >{name}</span>
        <div className={classes.socketState}> a</div>
      </Typography>
      <Typography align="center" gutterBottom>
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