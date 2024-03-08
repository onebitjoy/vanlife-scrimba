import { NavLink } from "react-router-dom"
import "./navbar.css"

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <span>
          <NavLink
            className="logo"
            to="/">#VANLIFE</NavLink>
        </span>
        <span className="navhold">
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/host">Host</NavLink>
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/about">About</NavLink>
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/vans">Vans</NavLink>
          <NavLink to="/host">
            <img className="hostnavimg" src="../../user.png" alt="Host Icon" width={30} height={30} />
          </NavLink>
        </span>
      </nav>
    </header>
  )
}

export default NavBar
