import { Navbar, Container, Nav } from 'react-bootstrap';


const NavBar = () => {
  return (
    
<section className='nav-container'>    
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/weather">My Weather App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/weather">Dashboard</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </section>
  
  )
}

export default NavBar
