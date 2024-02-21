import { Outlet } from "react-router-dom"
import HostNavBar from "./HostNavBar"
import { useState, useEffect } from "react"

function HostLayout() {
  const [hostVanList, setHostVanList] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const fetchVans = async () => {
      try {
        const data = await fetch("/api/host/vans", { signal: controller.signal })
        const vanData = await data.json()
        setHostVanList(vanData.vans)
      } catch (error) {
        console.log(error.message)
        console.log("Can't fetch data!")
      }
    }
    fetchVans()
    return () => {
      controller.abort()
    }
  }, [])


  return (
    <>
      <HostNavBar />
      <Outlet context={{ hostVanList }} />
    </>
  )
}

export default HostLayout
