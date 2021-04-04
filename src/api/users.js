import axios from 'axios';
import { errorAlert } from '../utils/alerts';

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = async (userInfo) => {
  try {
    const res = await axios.post(`${apiUrl}/api/auth/login`, { ...userInfo })
    return res.data;
  } catch (error) {
    errorHandler(error)
  }
}

export const fetchUserInfo = async (token) => {
  try {
    const res = await axios.get(`${apiUrl}/api/users/get-info`, {
      headers: {
        "x-session-key": token
      }
    })
    return res.data
  } catch (error) {
    errorHandler(error)
    if (error.response) {
      localStorage.removeItem("sessionToken")
    }
  }
}

const errorHandler = (error) => {
  if (error.response) {
    errorAlert(error.response.data.msg)
  } else if (error.request) {
    errorAlert("Check your internet connection")
  } else {
    errorAlert(error.message)
  }
}