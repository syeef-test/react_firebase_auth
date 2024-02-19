import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useAuth } from "./store/auth-context";

function App() {
  const { token, logout } = useAuth();
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              {!token && (
                <>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/signin">Signin</Link>
                  </li>
                </>
              )}
              {token && (
                <>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/logout" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
