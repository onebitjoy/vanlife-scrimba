import { useEffect, useState } from "react"
import "./vandetail.css"
import { useParams } from "react-router-dom";
import Loading from "./Loading.jsx"

function VanDetail() {
  const [van, setVan] = useState(null)
  const params = useParams()

  console.log(params);

  useEffect(() => {
    const controller = new AbortController()
    const fetchVans = async () => {
      try {
        const data = await fetch(`/api/vans/${params.id}`, { signal: controller.signal })
        const vanData = await data.json()
        setVan(vanData.vans)
        // console.log(vanData.vans);
      } catch (error) {
        alert("Can't fetch data!")
      }
    }
    fetchVans()
    return () => {
      controller.abort()
    }
  }, [params.id])

  return (
    <>
      <a className="backToVanListPage" onClick={() => history.back()}>&larr; Back to all vans</a>

      {
        van !== null ? (<div className="vanDetail">
          <div className="imageContainer">
            <img className="vanImage" src={van.imageUrl} alt={van.name} width="300" height="auto" />
          </div>
          <div className="details">
            <p className={`vanType ${van.type}`}>{van.type}</p>
            <h3 className="vanName">{van.name}</h3>
            <p className="vanPrice">${van.price} <span className="vanSub">/day</span> </p>
            <p className="vanDesc">{van.description}</p>
            <button className="rentBtn">Rent this van</button>
          </div>
        </div >) : < Loading />
      }
    </>
  )
}

export default VanDetail
