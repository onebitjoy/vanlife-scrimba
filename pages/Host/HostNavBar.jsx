import { Link } from "react-router-dom"
import "./hostnavbar.css"

function HostNavBar() {
  return (
    <nav className="hostNavBar">
      <Link className="hostNavBarLink" to="/host">Dashboard</Link>
      <Link className="hostNavBarLink" to="/host/income">Income</Link>
      <Link className="hostNavBarLink" to="/host/vans">Vans</Link>
      <Link className="hostNavBarLink" to="/host/reviews">Reviews</Link>
    </nav>
  )
}

export default HostNavBar
