import PropTypes from 'prop-types';
import React from 'react';
import DeviceCard from '../ui/DeviceCard';

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around"
}

const DevicesCards = ({ devices }) => {
  return (
    <div style={styles}>
      {
        devices.map(device => (
          <DeviceCard key={device.id} {...device} />
        ))
      }
    </div>
  )
}

export default React.memo(DevicesCards)

DevicesCards.propTypes = {
  devices: PropTypes.array.isRequired,
}