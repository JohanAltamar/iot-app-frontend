import { useEffect } from 'react'
import io from 'socket.io-client';
import AppRouter from './router/AppRouter';

function App() {
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
    <AppRouter />
  );
}

export default App;
