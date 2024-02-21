import { NavLink } from "react-router-dom"
import "./backbutton.css"

function BackButton({ msg, backToLink = "../" }) {
  return <div className="backButtonContainer">
    <NavLink className="backToVanListPage" to={backToLink}><span> {msg}</span></NavLink>
  </div>
}

export default BackButton
