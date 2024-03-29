import { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import AuthContext from "./store/auth-context";
import { useHistory } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  const history = useHistory();

  const logout = async () => {
    await authCtx.logout();
    // history.push("/signup");
  };

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              {!isLoggedIn && (
                <>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/signin">Signin</Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
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
            {!isLoggedIn && (
              <>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/signin">
                  <Signin />
                </Route>
              </>
            )}
            {isLoggedIn && (
              <>
                <Route path="/profile">
                  <Profile />
                </Route>
              </>
            )}

            <Route path="*">
              <Redirect to="/signin" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
