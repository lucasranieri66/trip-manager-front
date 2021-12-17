import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authenticated';

// function ProtectedRoute({ isAuth, component: Component, ...rest }) {
function ProtectedRoute({ component: Component, ...rest }) {
    if (isAuthenticated) {
        return < Component {...rest} />;
    } else {
        return (
            <Navigate to={{ pathname: '/signin' }} />
        );
    }
}

export default ProtectedRoute;
