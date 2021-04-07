import { useState, useEffect } from "react";
import { getDevicesInRoom, getRoomInfoById } from "../api/rooms";


export const useRoomInfo = (roomID, sessionToken) => {
  const [roomInfo, setRoomInfo] = useState(null)
  const [devicesList, setDevicesList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRoomInfo = async () => {
      const [roomInfoResp, devicesResp] = await Promise.all([
        getRoomInfoById(sessionToken, roomID),
        getDevicesInRoom(sessionToken, roomID)
      ])

      if (roomInfoResp?.results && devicesResp?.results) {
        setRoomInfo(roomInfoResp.results[0])
        setDevicesList(devicesResp.results)
      }
      setLoading(false);
    }
    getRoomInfo();
  }, [sessionToken, roomID])

  return [roomInfo, devicesList, loading];
}