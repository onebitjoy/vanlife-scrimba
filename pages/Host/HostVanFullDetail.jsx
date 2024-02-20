import { useEffect, useState } from "react"
import { Outlet, useParams, Link, NavLink } from "react-router-dom"
import Loading from "../../components/Loading.jsx"
import "./hostvanfulldetail.css"
function HostVanFullDetail() {

  const [van, setVan] = useState()
  const { id } = useParams()

  useEffect(() => {
    const controller = new AbortController()
    const fetchVans = async () => {
      try {
        let url = `/api/host/vans/${id}`
        console.log(url)
        const data = await fetch(url, { signal: controller.signal })
        const vansData = await data.json()
        setVan(vansData.vans[0])
      } catch (error) {
        alert("Can't fetch data!")
      }
    }
    fetchVans()

    return () => {
      controller.abort()
    }
  }, [id])

  if (!van) return <Loading />
  return (
    <div className="detailContainer">
      <div className="topContainer">

        <img src={van.imageUrl} alt={van.name} width={200} height={200} />
        <div className="hostFullDetailContainer">
          <p className={`type ${van.type}`}>{van.type}</p>
          <div className="name">{van.name}</div>
          <p className="hostVanPrice">
            <span className="hostvanpriceitem">${van.price}</span>
            <span className="hostvanpriceday">/day</span>
          </p>
        </div>

        <nav className="hostVanNav">
          <NavLink to="details">Details</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default HostVanFullDetail
