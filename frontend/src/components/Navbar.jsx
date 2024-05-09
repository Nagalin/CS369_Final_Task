import {Container,Nav,Navbar as NavbarBS } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <NavbarBS bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBS.Brand href="/homepage">My Store</NavbarBS.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/addProducts">Add Products</Nav.Link>
            <Nav.Link href="/login">Log-in</Nav.Link>
          </Nav>
        </Container>
      </NavbarBS>
      <Outlet/>
    </>
  );
}

export default Navbar;