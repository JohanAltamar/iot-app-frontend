import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const PublicRoute = ({ component: Component, user, ...rest }) => {
  const location = useLocation()
  return (
    <Route {...rest} render={
      props => {
        if (!user) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={location.state.from?.pathname || "/"} />
        }
      }
    } />
  )
}

export default PublicRoute;