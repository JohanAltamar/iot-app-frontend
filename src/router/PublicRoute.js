import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const PublicRoute = ({ component: Component, user, ...rest }) => {
  const location = useLocation()
  const pathname = location?.state?.from?.pathname || "/"
  
  return (
    <Route {...rest} render={
      props => {
        if (!user) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={pathname} />
        }
      }
    } />
  )
}

export default PublicRoute;