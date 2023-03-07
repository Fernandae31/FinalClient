import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Principal-Nav">
    <Link to="/">
      <button className="nav-button">Home</button>
    </Link>
  
    <Link to="/Mangas">
      <button className="nav-button">Mangas</button>
    </Link>
  
    <Link to="/Figure">
      <button className="nav-button">Figures</button>
    </Link>

  
    {!isLoggedIn && (
      <>
        <Link to="/signup">
          <button className="nav-button">SignUp</button>
        </Link>
        <Link to="/login">
          <button className="nav-button" onClick={isLoggedIn}>LogIn</button>
        </Link>
      </>
    )}

    {isLoggedIn && (
      <>
        <button className="nav-button" onClick={logOutUser}>
          Log Out↗️
        </button>
  
        <Link to="/profile">
          <button className="nav-button">Profile</button>
        </Link>
  
        <span>{user && user.name}</span>
      </>
    )}
  </nav>
  );
}

export default Navbar;
