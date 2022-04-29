import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' href="#home">D-Valley</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            {
              user?
              <Button onClick={handleSignOut}>Sign Out</Button>
              :
              <Nav.Link href="#login" as={Link} to='/login'>Login</Nav.Link>
            }
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
