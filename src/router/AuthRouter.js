import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import PublicRoute from './PublicRoute';

const AuthRouter = () => {
  const { userInfo } = useContext(UserContext)
  return (
    <div>
      <Switch>
        <PublicRoute 
          exact 
          path="/auth/login" 
          component={LoginScreen} 
          user={userInfo}
        />
        <Route exact path="/auth/register" component={SignUpScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}

export default AuthRouter
