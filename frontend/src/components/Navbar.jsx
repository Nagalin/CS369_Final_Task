import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import axios from "../lib/axios"
import { useAuthContext } from "../contexts/AuthContext"
import Swal from "sweetalert2"

function Navbar() {
  const { auth, setAuth } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire({
      title: "Do You want to logout ?",
      showDenyButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: "Cancel",
    })
    .then(result => {
      if (result.isConfirmed) {
        Swal.fire("You have logout!", "", "success")
        axios.post("/logout")
        setAuth(false)
        navigate("/")
      }
    })
  }

  return (
    <>
      <NavbarBS bg="dark" variant="dark">
        <Container>
          <NavbarBS.Brand to="/" as={NavLink}>
            My Store
          </NavbarBS.Brand>

          <Nav className="me-auto">
            {auth ? (
              <Nav.Link to="/add-products" as={NavLink}>
                Add Products
              </Nav.Link>
            ) : (
              <Nav.Link to="/login" as={NavLink}>
                Please login to add product
              </Nav.Link>
            )}
          </Nav>

          <Nav className="ml-auto">
            { auth ? <Nav.Link onClick={handleLogout}>Log-out</Nav.Link> : null }
          </Nav>
        </Container>
      </NavbarBS>
      <Outlet />
    </>
  )
}

export default Navbar
