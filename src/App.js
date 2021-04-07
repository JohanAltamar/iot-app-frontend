import { useEffect, useState } from 'react'

import AppRouter from './router/AppRouter';
import UserContext from './context/UserContext';

function App() {
  const [sessionToken, setSessionToken] = useState(localStorage.getItem("sessionToken"));
  const [userInfo, setUserInfo] = useState(null)

  // SET SESSION TOKEN IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("sessionToken", sessionToken)
  }, [sessionToken])

  return (
    <UserContext.Provider value={{ sessionToken, setSessionToken, userInfo, setUserInfo }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
