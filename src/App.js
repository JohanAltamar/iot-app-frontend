import { useEffect, useState } from 'react'
import io from 'socket.io-client';

import AppRouter from './router/AppRouter';
import UserContext from './context/UserContext';

function App() {
  const [sessionToken, setSessionToken] = useState(localStorage.getItem("sessionToken"));
  const [userInfo, setUserInfo] = useState(null)

  // SET SESSION TOKEN IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("sessionToken", sessionToken)
  }, [sessionToken])

  useEffect(() => {
    const socketClient = io("http://localhost:8080", {
      transports: ['websocket', 'polling', 'flashsocket'], 'auth': {
        user: 'TEST'
      }
    })

    socketClient.on("connect", () => {
      console.log("Connected")
    })

    socketClient.on("message", payload => {
      console.log(payload)
    })
  }, [])

  return (
    <UserContext.Provider value={{ sessionToken, setSessionToken, userInfo, setUserInfo }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
