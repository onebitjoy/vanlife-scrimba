import "./hostvanlist.css"
import { Await, Link, defer, useLoaderData } from "react-router-dom"
import Error from "../components/Error"
import getApiVans from "../utils/getApiVans"
import { Suspense } from "react"
import Loading from "../components/Loading"

const BASE_URL = "https://van-server.onrender.com/api/"

export async function loader() {
  // return await getApiVans(BASE_URL + "host/vans/123")
  const dataPromise = getApiVans(BASE_URL + "host/vans/123")
  return defer({ vans: dataPromise })
}

function HostVanList({ linkTo, linkToSuffix = "" }) {
  const data = useLoaderData()
  // const hostVanList = data.data

  function fullvanlist({ data }) {
    const vanslist = data.data
    return (vanslist.map((hostVan) => {
      return <Link to={`${linkTo}/${hostVan.id}/${linkToSuffix}`
      } key={hostVan.id} >
        <div className="hostVanItem">
          <img src={hostVan.imageUrl} alt={hostVan.name} width="60" height="60" />
          <div className="hostVanItemDetail">
            <p className="hostVanItemDetailName">{hostVan.name}</p>
            <p className="hostVanItemPrice">${hostVan.price}/day</p>
          </div>
          <button className="hostVanItemBtn">Edit</button>
        </div>
      </Link>
    })
    )
  }
  return (
    <div className="hostVansList">
      <div className="hostVansListBanner">
        <h3>Your listed vans</h3>
        <button>View all</button>
      </div>
      <div className="hostVanListAll">
        {/* {error !== null && (<Error />)} */}
        <Suspense fallback={<Loading />}>
          <Await resolve={data.vans}>
            {fullvanlist}
          </Await>
        </Suspense>

      </div>
    </div >
  )
}

export default HostVanList