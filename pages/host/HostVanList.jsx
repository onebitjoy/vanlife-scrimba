import "./hostvanlist.css"
import { Link, useOutletContext } from "react-router-dom"
import Loading from "../components/Loading"

function HostVanList({ linkTo, linkToSuffix = "" }) {

  const { hostVanList } = useOutletContext()

  if (!hostVanList) return <Loading />
  return (
    <div className="hostVansList">
      <div className="hostVansListBanner">
        <h3>Your listed vans</h3>
        <button>View all</button>
      </div>
      <div className="hostVanListAll">
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
