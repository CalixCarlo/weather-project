import { Navbar, Container, Nav } from 'react-bootstrap';


const Topbar = () => {
  return (
    
<section className='nav-container'>    
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/weather">My Weather App</Navbar.Brand>
      <Nav className="me-flex-end">
      <Nav.Link href="/">Search For Weather</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </section>
  
  )
}

export default Topbar
