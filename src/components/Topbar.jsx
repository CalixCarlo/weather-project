import { Navbar, Container, Nav } from 'react-bootstrap';


const Topbar = () => {
  return (
    
<section className='nav-container'>    
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/weather">My Weather App</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/">Weather of the Week</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>
  </section>
  
  )
}

export default Topbar
