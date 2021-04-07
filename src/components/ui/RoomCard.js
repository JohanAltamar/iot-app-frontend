import { useContext } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WeekendIcon from '@material-ui/icons/Weekend';

import ThemeContext from '../../context/ThemeContext';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    maxWidth: 200,
    margin: "1rem auto",
    padding: theme.spacing(2),
  },
  cardMedia: {
    textAlign: "center",
    "& svg": {
      fontSize: 100
    },
  },
  cardContent: {
    padding: theme.spacing(0),
    "&:last-child": {
      paddingBottom: 0,
    },
    "& span": {
      textTransform: "capitalize",
    },
  },
}))

const RoomCard = ({ name, id, icon }) => {
  const classes = useStyles();
  const history = useHistory();
  const { darkMode } = useContext(ThemeContext)

  const handleCardClick = id => (ev) => {
    history.push(`/rooms/${id}`)
  }

  return (
    <Card
      id={id}
      className={classes.cardContainer}
      onClick={handleCardClick(id)}
      elevation={darkMode ? 0 : 4}
    >
      <CardMedia className={classes.cardMedia}>
        <WeekendIcon color="action"/>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography align="center" variant="h5" >
          <span>{name}</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RoomCard

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
}