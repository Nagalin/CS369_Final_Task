import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <NavbarBS bg="dark" variant="dark">
        <Container>
          <NavbarBS.Brand href="/homepage">My Store</NavbarBS.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/addProducts">Add Products</Nav.Link>
            <Nav.Link href="/login">Log-in</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link onClick={()=> {
              axios.post('/logout')
              navigate('/')
            }
            }>
              Log-out
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBS>
      <Outlet />
    </>
  );
}

export default Navbar;
