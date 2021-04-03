import { useEffect } from 'react'
import io from 'socket.io-client';

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
    <div className="App">
      hola
    </div>
  );
}

export default App;
