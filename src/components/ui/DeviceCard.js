import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    maxWidth: 200,
    width: 200,
    margin: "1rem",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]:{
      
    }
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

const DeviceCard = ({ name, id, icon, value, minValue, maxValue }) => {
  const classes = useStyles();

  return (
    <Card
      id={id}
      className={classes.cardContainer}
      elevation={4}
    >
      <CardContent className={classes.cardContent}>
        <Typography align="center" variant="h5" >
          <span>{name}</span>
        </Typography>
      </CardContent>

      <CardMedia className={classes.cardMedia}>
        <AcUnitIcon />
      </CardMedia>

      <CardContent className={classes.cardContent}>
        <Typography align="center" variant="h5" >
          <span>{value || "- - - - -"}</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default React.memo(DeviceCard)

DeviceCard.propTypes = {
  name:     PropTypes.string.isRequired,
  icon:     PropTypes.string,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
}
