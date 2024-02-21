import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import { useEffect, useState } from "react"

function Layout() {

  const [vans, setVans] = useState([])

  useEffect(() => {

    const controller = new AbortController()

    const fetchVans = async () => {
      try {
        const data = await fetch("/api/vans", { signal: controller.signal })
        const vansData = await data.json()
        setVans(vansData.vans)
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
      <NavBar />
      <Outlet context={{ vans }} />
      <Footer />
    </>
  )
}

export default Layout
