import { Link } from "react-router-dom"
import "./navbar.css"

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <span>
          <Link className="logo" to="/">#VANLIFE</Link>
        </span>
        <span>
          <Link className="link" to="/host">Host</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/vans">Vans</Link>
        </span>
      </nav>
    </header>
  )
}

export default NavBar
