import { Outlet } from "react-router-dom"
import HostNavBar from "./HostNavBar"

function HostLayout() {
  return (
    <>
      <HostNavBar />
      <Outlet />
    </>
  )
}

export default HostLayout
