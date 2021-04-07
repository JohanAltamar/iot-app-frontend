import axios from 'axios';
import { errorAlert } from '../utils/alerts';

const apiUrl = process.env.REACT_APP_API_URL;

export const getRoomInfoById = async (token, roomID) => {
  try {
    const res = await axios.get(
      `${apiUrl}/api/rooms/${roomID}`, axiosOptions(token)
    )
    return res.data
  } catch (error) {
    errorHandler(error)
  }
}

export const getDevicesInRoom = async(token, roomID) => {
  try {
    const res = await axios.get(
      `${apiUrl}/api/devices/rooms/${roomID}`, axiosOptions(token)
    )
    return res.data
  } catch (error) {
    errorHandler(error)
  }
}

const axiosOptions = (token) => ({
  headers: {
    "x-session-key": token
  }
})

const errorHandler = (error) => {
  if (error.response) {
    errorAlert(error.response.data.msg)
  } else if (error.request) {
    errorAlert("Check your internet connection")
  } else {
    errorAlert(error.message)
  }
}