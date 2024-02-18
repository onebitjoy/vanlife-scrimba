// import { Link, NavLink } from "react-router-dom"

import { NavLink } from "react-router-dom"
import "./hostnavbar.css"

function HostNavBar() {

  return (
    <nav className="hostNavBar">
      <NavLink end className="hostNavBarLink" to="/host">Dashboard</NavLink>
      <NavLink className="hostNavBarLink" to="/host/income">Income</NavLink>
      <NavLink className="hostNavBarLink" to="/host/vans">Vans</NavLink>
      <NavLink className="hostNavBarLink" to="/host/reviews">Reviews</NavLink >
    </nav >
  )
}

export default HostNavBar
