import io from 'socket.io-client';
import { useCallback, useEffect, useState } from "react";

export const useRoomSocket = (roomID, sessionToken, devicesList) => {
  const [state, setState] = useState(false);
  const [devicesIDs, setDevicesIDs] = useState([]);
  const [payload, setPayload] = useState([]);

  const handleMessageReceived = useCallback((data) => {
    const { deviceID, value } = data;

    // COPY DEVICES LIST ARRAY
    let devicesInfo = [...devicesList];

    // FIND DEVICE WITH THE ID
    const idx = devicesInfo.findIndex(({ id }) => id === deviceID)

    // SET VALUE PROPERTY
    devicesInfo[idx].value = value;

    // REFRESH DEVICES INFO STATE
    setPayload(devicesInfo);
  }, [devicesList])

  // SET AN ARRAY WITH DEVICES IDs
  useEffect(() => {
    let devicesArr = [];
    if (!!devicesList.length) {
      devicesList.forEach(({ id }) => {
        devicesArr = [...devicesArr, id]
      })
      setDevicesIDs(devicesArr);
      setPayload(devicesList);
    }
  }, [devicesList])

  // SET SOCKET CONNECTION AND SUBSCRIPTIONS TO DEVICES IDs
  useEffect(() => {
    if (!!devicesIDs.length) {
      const socketClient = io("http://localhost:8080", {
        transports: ['websocket', 'polling', 'flashsocket'],
        auth: {
          token: sessionToken,
          roomID,
          devicesIDs
        },
      })

      socketClient.on("connect", () => {
        setState(true);
        // console.log(`Connected to rooms ${devicesIDs}`)
      })

      socketClient.on("connect_error", () => {
        setState(prevState => prevState ? false : prevState);
      })

      socketClient.on("disconnect", () => {
        setState(false);
        // console.log(`Leaving rooms ${devicesIDs}`)
      })

      socketClient.on("message", data => {
        handleMessageReceived(data)
      })

      return () => {
        socketClient.disconnect();
      }
    }
  }, [roomID, sessionToken, devicesIDs, handleMessageReceived])

  return [state, payload];
}