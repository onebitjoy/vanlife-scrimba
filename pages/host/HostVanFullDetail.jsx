import "./hostvanfulldetail.css"
import { Outlet, NavLink, useLoaderData, Await } from "react-router-dom"
import Loading from "../components/Loading.jsx"
import BackButton from "../components/BackButton.jsx"
import getApiVans from "../utils/getApiVans.js"
import { Suspense } from "react"


const BASE_URL = "https://van-server.onrender.com/api/";

export async function loader(params) {
  return getApiVans(BASE_URL + `host/vans/123/${params.id}`)
}

function HostVanFullDetail() {

  const dataPromise = useLoaderData()

  function rendervandetails({ data }) {

    const van = data.data[0]
    console.log(van)

    // return <div>heloloo</div>
    return (
      <>
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
      </>
    )
  }

  return (
    <div className="detailContainer">
      <BackButton msg={`Back to all vans`} />
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise}>
          {rendervandetails}
        </Await>
      </Suspense>
    </div>
  )
}

export default HostVanFullDetail