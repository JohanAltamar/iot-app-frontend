import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/auth" component={AuthRouter} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;