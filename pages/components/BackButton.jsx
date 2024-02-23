import { Link } from "react-router-dom"
import "./backbutton.css"

function BackButton({ msg, backToLink = "../" }) {
  return <div className="backButtonContainer">
    <Link className="backToVanListPage" to={backToLink}><span> {msg}</span></Link>
  </div>
}

export default BackButton
