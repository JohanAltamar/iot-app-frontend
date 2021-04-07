import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen';
import RoomScreen from '../screens/RoomScreen';
import AuthRouter from './AuthRouter';
import ProtectedRoute from './ProtectedRoute';
import { fetchUserInfo } from '../api/users';

/**
 * Check session token in localstorage, if no one was found it 
 * redirects to login
 */

const AppRouter = () => {
  const { userInfo, setUserInfo, sessionToken } = useContext(UserContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      const resp = await fetchUserInfo(sessionToken);
      if (resp?.results) {
        setUserInfo(resp.results[0])
      }
      else {
        setUserInfo(null);
      }
      setLoading(false);
    }
    fetchInfo();
  }, [sessionToken, setUserInfo])

  return (
    <Router>
      <div>
        {
          !loading ? (
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                component={HomeScreen}
                user={userInfo}
              />
              <ProtectedRoute
                exact
                path="/rooms/:roomID"
                component={RoomScreen}
                user={userInfo}
              />
              <Route path="/auth" component={AuthRouter} />
            </Switch>
          ) : (
            <h2>Loading ...</h2>)
        }
      </div>
    </Router>
  )
}

export default AppRouter;