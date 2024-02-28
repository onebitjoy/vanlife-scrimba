import "./hostvanfulldetail.css"
import { Outlet, useParams, NavLink, useOutletContext, useLoaderData } from "react-router-dom"
import Loading from "../components/Loading.jsx"
import BackButton from "../components/BackButton.jsx"

function HostVanFullDetail() {

  // const { id } = useParams()
  // const { hostVanList } = useOutletContext()
  // const van = hostVanList.filter(v => v.id === id)[0]

  const { data: d, error } = useLoaderData()
  const van = d[0]
  if (!van) return <Loading />
  return (
    <div className="detailContainer">
      < BackButton msg={`Back to all vans`} />
      <div className="topContainer">

        <div className="hostVanDetailCont">
          <img src={van.imageUrl} alt={van.name} width={300} height={300} />
          <div className="hostFullDetailContainer">
            <p className={`type ${van.type}`}>{van.type}</p>
            <div className="name">{van.name}</div>
            <p className="hostVanPrice">
              <span className="hostvanpriceitem">${van.price}</span>
              <span className="hostvanpriceday">/day</span>
            </p>
          </div>
        </div>

        <nav className="hostVanNav">
          <NavLink end to="">Details</NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>

      </div>
      <div className="outletCont">
        <Outlet context={[van]} />
      </div>
    </div>
  )
}

export default HostVanFullDetail