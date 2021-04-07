import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles'
import RoomCard from '../ui/RoomCard';

// const useStyles = makeStyles(theme => ({

// }))

const RoomCards = ({ rooms }) => {
  return (
    <Container>
      {
        rooms.map(({ id, name }) => (
          < RoomCard key={id} name={name} id={id} />
        ))
      }
    </Container>
  )
}

export default RoomCards

RoomCards.propTypes = {
  rooms: PropTypes.array.isRequired
}