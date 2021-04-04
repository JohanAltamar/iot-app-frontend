import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainContainer from '../components/Containers/Main';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (user) {
          return (
            <MainContainer>
              <Component {...rest} {...props} />
            </MainContainer>
          )
        } else {
          return <Redirect to={
            {
              pathname: '/auth/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
