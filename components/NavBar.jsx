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
        <span>
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/host">Host</NavLink>
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/about">About</NavLink>
          <NavLink
            className={({ isActive }) => `link ${isActive ? "currentPage" : null}`}
            to="/vans">Vans</NavLink>
        </span>
      </nav>
    </header>
  )
}

export default NavBar
