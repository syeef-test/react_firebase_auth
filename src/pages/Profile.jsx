import React, { useContext } from "react";
import { useAuth } from "../store/auth-context";
import { useHistory } from "react-router-dom";

function Profile() {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  return (
    <>
      <h2>Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
