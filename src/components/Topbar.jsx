import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


const Topbar = () => {
  return (
    
    <div className="navbar">
    <div className="container">
      <span className="logo">My Weather App</span>
      <nav>
        <NavLink to="/" end>Search for Weather</NavLink>
        <NavLink to="/news" end>News</NavLink>
        <NavLink to="/about" end>About</NavLink>
  
      </nav>
    </div>
  </div>
  
  )
}

export default Topbar
