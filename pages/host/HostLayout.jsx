import { Outlet } from "react-router-dom"
import HostNavBar from "./HostNavBar"
import { useState, useEffect } from "react"
import useFetch from "../utils/useFetch.js"
import Loading from "../components/Loading.jsx"

function HostLayout() {
  const { data, loading, error } = useFetch({ url: "/api/host/vans", dependencies: [] })
  const [hostVanList, setHostVanList] = useState([])
  useEffect(() => {
    setHostVanList(data?.vans)
  }, [data])

  return (
    <>
      <HostNavBar />
      {loading && <Loading />}
      {error && <Error />}
      {data?.vans.length && <Outlet context={{ hostVanList }} />}
    </>
  )
}

export default HostLayout
