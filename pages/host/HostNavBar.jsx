// import { Link, NavLink } from "react-router-dom"

import { NavLink } from "react-router-dom"
import "./hostnavbar.css"

function HostNavBar() {

  return (
    <nav className="hostNavBar">
      <NavLink end className="hostNavBarLink" to="/host">Dashboard</NavLink>
      <NavLink className="hostNavBarLink" to="income">Income</NavLink>
      <NavLink className="hostNavBarLink" to="vans">Vans</NavLink>
      <NavLink className="hostNavBarLink" to="reviews">Reviews</NavLink >
    </nav >
  )
}

export default HostNavBar
