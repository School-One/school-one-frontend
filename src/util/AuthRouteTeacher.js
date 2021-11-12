import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/auth';

export default function AuthRouteTeacher({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (user && user.rol === 'Profesor' ? (
        <Redirect to="/teacher" />
      ) : (
        <Component {...props} />
      ))}
    />
  );
}
