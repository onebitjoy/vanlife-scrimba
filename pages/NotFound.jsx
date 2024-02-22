import { Link } from "react-router-dom"
import "./notfound.css"

function NotFound({
  msg = "Sorry, we couldn't find the page you were looking for!",
  buttonText = "Return to home page",
  linkTo = "/"
}) {
  return (
    <div className="notFound">
      <h1>{msg}</h1>
      <Link to={linkTo}>
        <button>{buttonText}</button>
      </Link>
    </div>
  )
}

export default NotFound
