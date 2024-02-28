import "./hostvanlist.css"
import { Link, useLoaderData } from "react-router-dom"
import Error from "../components/Error"

export async function getVans() {
  const d = { data: null, error: null }
  try {
    const response = await fetch("https://van-server.onrender.com/api/host/vans/123")
    d.data = await response.json();
    console.log(d.data)
  } catch (error) {
    d.error = error.message
  }
  return d
}

function HostVanList({ linkTo, linkToSuffix = "" }) {

  const { data: hostVanList, error } = useLoaderData()

  return (
    <div className="hostVansList">
      <div className="hostVansListBanner">
        <h3>Your listed vans</h3>
        <button>View all</button>
      </div>
      <div className="hostVanListAll">
        {error !== null && (<Error />)}
        {
          Object.keys(hostVanList).length !== 0 && (
            hostVanList.map((hostVan) => {
              return (
                <Link to={`${linkTo}/${hostVan.id}/${linkToSuffix}`} key={hostVan.id}>
                  <div className="hostVanItem">
                    <img src={hostVan.imageUrl} alt={hostVan.name} width="60" height="60" />
                    <div className="hostVanItemDetail">
                      <p className="hostVanItemDetailName">{hostVan.name}</p>
                      <p className="hostVanItemPrice">${hostVan.price}/day</p>
                    </div>
                    <button className="hostVanItemBtn">Edit</button>
                  </div>
                </Link>
              )
            })
          )
        }
      </div>
    </div>
  )
}

export default HostVanList