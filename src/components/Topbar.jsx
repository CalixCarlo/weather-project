import { NavLink } from "react-router-dom"


const Topbar = () => {
  return (
    
  
    <div className="navbar-container">
      <div className="logo">My Weather App</div>
      <nav>
        <NavLink to="/" end>Search for Weather</NavLink>
        <NavLink to="/news" end>News</NavLink>
        <NavLink to="/about" end>About</NavLink>
  
      </nav>
    </div>

  
  )
}

export default Topbar
