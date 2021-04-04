import { useEffect, useState } from 'react'
import io from 'socket.io-client';

import AppRouter from './router/AppRouter';
import UserContext from './context/UserContext';

function App() {
  const sessionToken = localStorage.getItem("sessionToken");
  const [userInfo, setUserInfo] = useState(null)

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
    <UserContext.Provider value={{ sessionToken, userInfo, setUserInfo }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
