import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Test from './modules/auth/Test'
import Signin from './modules/auth/Signin'
import Signup from './modules/auth/Signup'
import { useState } from 'react'
import ProtectedRoute from './modules/tools/ProtectedRoute'
import InitialPage from './modules/initialPage/InitialPage'

function AppRoutes() {
  // const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <InitialPage />
            // <InitialPage isAuth={isAuth} />
          }
        />
        <Route
          path="/agent/signin"
          exact
          element={
            <Signin type='agent' />
            // <Signin isAuth={setIsAuth} type='agent' />
          }
        />
        <Route
          path="/agent/signup"
          exact
          element={
            <Signup type='agent' />
            // <Signup isAuth={setIsAuth} type='agent' />
          }
        />
        <Route
          path="/traveller/signin"
          exact
          element={
            <Signin type='traveller' />
            // <Signin isAuth={setIsAuth} type='traveller' />
          }
        />
        <Route
          path="/traveller/signup"
          exact
          element={
            <Signup type='traveller' />
            // <Signup isAuth={setIsAuth} type='traveller' />
          }
        />
        <Route path="/test" element={<ProtectedRoute component={Test} />} />
        {/* <Route path="/test" element={<ProtectedRoute isAuth={isAuth} component={Test} />} /> */}

      </Routes>
    </Router>
  );
}

export default AppRoutes;
