import { useRouteError } from "react-router-dom"
import "./error.css"
function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="errorContainer">
      <h1 className="errorHeading">Oops!</h1>
      <p className="errorBanner">There's an Error</p>
      <div className="errorDetails">
        <pre className="errorMsg">Error: ({error.status}) {error.message}</pre>
        <p className="statusText">{error.statusText}</p>
      </div>
    </div>
  )
}

export default Error
