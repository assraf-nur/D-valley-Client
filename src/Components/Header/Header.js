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
    <Navbar collapseOnSelect expand="lg" className="sticky-top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' href="#home">D-Valley</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to='/' href="#myProducts">Home</Nav.Link>
          <Nav.Link as={Link} to='/blogs' href="#myBlogs">Blogs</Nav.Link>
            {
              user?
              <Nav.Link as={Link} to='/manageInventory' href="#manage">Manage</Nav.Link>
              :
              <></>
            }
            {
              user?
              <Nav.Link as={Link} to='/addProducts' href="#addProducts">Add Product</Nav.Link>
              :
              <></>
            }
            {
              user?
              <Nav.Link href="#myProducts">My Products</Nav.Link>
              :
              <></>
            }
            {
              user?
              <Button className="btn-danger" onClick={handleSignOut}>Sign Out</Button>
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
