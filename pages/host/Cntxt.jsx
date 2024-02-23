import { Outlet, useOutletContext } from "react-router-dom"

function Cntxt() {
  const { hostVanList } = useOutletContext()
  return (
    <>
      <Outlet context={{ hostVanList }} />
    </>
  )
}

export default Cntxt
