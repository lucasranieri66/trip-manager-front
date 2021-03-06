import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authenticated';

// function ProtectedRoute({ isAuth, component: Component, ...rest }) {
function ProtectedRoute({ protected: Component, type: type, ...rest }) {
    if (isAuthenticated(type)) {
        return < Component {...rest} />;
    } else {
        return (
            <Navigate to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;
