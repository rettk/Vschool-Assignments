import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from "./components/ProtectedRoute.js"
import { UserContext } from "./context/UserProvider.js"

export default function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      {token && <Navbar logout={logout} />}
      <Switch>
        <Route
          exact path="/"
          render={() => token ? <Redirect to="/profile" /> : <Auth />}  //Option1 protected Route
        />
        <ProtectedRoute  //Option2 protected route uses ProtectedRoute.js, kinda messy
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        // username={username}   //you could add this if you needed to
        />
        <ProtectedRoute
          path="/public"
          component={Public}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  )
}