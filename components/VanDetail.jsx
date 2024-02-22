import { useEffect, useState } from "react"
import "./vandetail.css"
import { useParams } from "react-router-dom";
import Loading from "./Loading.jsx"
import BackButton from "./BackButton.jsx";

function VanDetail() {
  const [van, setVan] = useState()
  const { id } = useParams()
  useEffect(() => {
    const controller = new AbortController()
    async function fetchVan() {
      const data = await fetch(`/api/vans/${id}`, { signal: controller.signal })
      const datajson = await data.json()
      setVan(datajson.vans)
    }
    fetchVan()
    return () => {
      controller.abort()
    }
  }, [id])

  if (!van) return <Loading />
  return (
    <>
      <BackButton msg={"Back to all vans"} backToLink="/vans" />
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
