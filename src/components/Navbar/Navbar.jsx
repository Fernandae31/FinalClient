import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" variant="light"className="Principal-Nav">
      <Container >
        <Navbar.Brand className="nav-link-home" href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/list/products">
            Mangas
          </Nav.Link>
          <Nav.Link as={Link} to="/list/figures">
            Figures
          </Nav.Link>
          <Nav.Link as={Link} to="/order">
           Orders
          </Nav.Link>
        </Nav>
        {isLoggedIn ? (
          <Nav>
            <Nav.Link as={Link} to="/">
              {user && user.name}
            </Nav.Link>
            <Nav.Link onClick={logOutUser}>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          
        )}
      </Container>
    </Navbar>
  );
}


export default MyNav;