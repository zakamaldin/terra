import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FakeAuth from '../services/FakeAuth'

const ProtectedRoute =({ component: Component, ...rest}) => (
        <Route {...rest} render={(props) => (
            FakeAuth.isAuthenticated === true
                ? <Component {...props}/>
                : <Redirect to={'login'}/>
        )}/>
);

export default ProtectedRoute;
