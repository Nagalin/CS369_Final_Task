import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import axios from '../lib/axios';
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
function Navbar() {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <NavbarBS bg="dark" variant="dark">
        <Container>
          <NavbarBS.Brand to="/" as={NavLink}>My Store</NavbarBS.Brand>
          <Nav className="me-auto">
           
           
            { auth?  
              <Nav.Link to="/addProducts" as={NavLink} >Add Products</Nav.Link> : 
              <Nav.Link to="/login" as={NavLink} >Please log-in to add product</Nav.Link>
            }
           
          </Nav>
          <Nav className="ml-auto">
            {auth?  
            <Nav.Link onClick={()=> {
              
Swal.fire({
  title: "Do You want to logout ?",
  showDenyButton: true,
  
  confirmButtonText: "Confirm",
  denyButtonText: 'Cancel'})
  .then((result) => {
  
  if (result.isConfirmed) {
    Swal.fire("You have logout!", "", "success");
    axios.post('/logout')
    setAuth(false)
    navigate('/')
  } 
});
            }
            }>
              Log-out
            </Nav.Link>:
            null}
           
          </Nav>
        </Container>
      </NavbarBS>
      <Outlet />
    </>
  );
}

export default Navbar;
