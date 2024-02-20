import { useEffect, useState } from "react"
import "./hostvanlist.css"
import { Link } from "react-router-dom"

function HostVanList({ linkTo, linkToSuffix = "" }) {
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
