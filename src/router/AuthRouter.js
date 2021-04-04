import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';

const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={SignUpScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}

export default AuthRouter
