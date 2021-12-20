import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Test from './modules/auth/Test'
import Signin from './modules/auth/Signin'
import Signup from './modules/auth/Signup'
import { useState } from 'react'
import ProtectedRoute from './modules/tools/ProtectedRoute'
import InitialPage from './modules/initialPage/InitialPage'
import AgentCreatePackage from './modules/service/AgentCreatePackage'
import AgentViewPackage from './modules/service/AgentViewPackage'
import TravellerViewPackage from './modules/service/TravellerViewPackage'
import MainTemplate from './modules/common/MainTemplate'

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <InitialPage />
          }
        />
        <Route
          path="/agent/signin"
          exact
          element={
            <Signin type='agent' />
          }
        />
        <Route
          path="/agent/signup"
          exact
          element={
            <Signup type='agent' />
          }
        />
        <Route
          path="/agent/create-package"
          exact
          element={<ProtectedRoute protected={MainTemplate} type='agent' component={AgentCreatePackage} />}
        />
        <Route
          path="/agent/view-package"
          exact
          element={<ProtectedRoute protected={MainTemplate} type='agent' component={AgentViewPackage} />}
        />
        <Route
          path="/traveller/signin"
          exact
          element={
            <Signin type='traveller' />
          }
        />
        <Route
          path="/traveller/signup"
          exact
          element={
            <Signup type='traveller' />
          }
        />
        <Route
          path="/traveller/view-package"
          exact
          element={<ProtectedRoute protected={MainTemplate} type='traveller' component={TravellerViewPackage} />}
        />
        <Route path="/test" element={<ProtectedRoute protected={Test} type='agent' />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
