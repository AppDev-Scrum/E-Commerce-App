import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPlus, FaListAlt } from 'react-icons/fa'; // Importing icons from react-icons
import './ecommerce.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom">Product Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => navigate('/add-product')} className="nav-link-custom">
                <FaPlus /> Add Product
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/view-products')} className="nav-link-custom">
                <FaListAlt /> View Products
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Dashboard;
