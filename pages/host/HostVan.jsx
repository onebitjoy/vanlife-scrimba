import { Outlet } from "react-router-dom"
import "./hostvanpage.css"

function HostVan() {
  return (
    <div className="hostVanPageContainer">
      <Outlet />
    </div>
  )
}

export default HostVan
