import { useEffect, useState } from "react"
import "./vandetail.css"
import { useLocation, useParams } from "react-router-dom";
import Loading from "./Loading.jsx"
import BackButton from "./BackButton.jsx";
import useFetch from "../utils/useFetch.js";
import Error from "./Error.jsx";

function VanDetail() {
  const { id } = useParams()
  const { data, loading, error } = useFetch({
    url: `/api/vans/${id}`,
    dependencies: [id]
  })
  const [van, setVan] = useState()

  useEffect(() => {
    setVan(data?.vans)
  }, [data])

  const location = useLocation()
  let searchParamsFromPrevPage = location.state?.search || ""
  let vanType = searchParamsFromPrevPage.split("=")[1] || "all"

  return (
    <>
      <BackButton msg={`Back to ${vanType} vans`} backToLink={`/vans?${searchParamsFromPrevPage}`} />
      <div className="vanDetail">
        {loading && <Loading />}
        {error && <Error />}
        {data?.vans && <>
          <div className="imageContainer">
            <img className="vanImage" src={van?.imageUrl} alt={van?.name} fetchpriority="high" as="image" width={300} height={300} />
          </div>
          <div className="details">
            <p className={`vanType ${van?.type}`}>{van?.type}</p>
            <h3 className="vanName">{van?.name}</h3>
            <p className="vanPrice">${van?.price} <span className="vanSub">/day</span> </p>
            <p className="vanDesc">{van?.description}</p>
            <button className="rentBtn">Rent this van</button>
          </div>
        </>
        }

      </div >

    </>
  )
}

export default VanDetail
