import axios from 'axios';
import { errorAlert } from '../utils/alerts';

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUser = async (userInfo) => {
  try {
    const res = await axios.post(`${apiUrl}/api/auth/login`, { ...userInfo })
    return (res.data);
  } catch (error) {
    if (error.response) {
      errorAlert(error.response.data.msg)
    } else if (error.request) {
      errorAlert("Check your internet connection")
    } else {
      errorAlert(error.message)
    }
  }
}