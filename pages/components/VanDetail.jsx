import { useEffect, useState } from "react"
import "./vandetail.css"
import { useLoaderData, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import Loading from "./Loading.jsx"
import BackButton from "./BackButton.jsx";
import useFetch from "../utils/useFetch.js";
import Error from "./Error.jsx";

function VanDetail() {
  const { id } = useParams()
  const { data, error } = useLoaderData()
  const [van, setVan] = useState()
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  const location = useLocation()
  let searchParamsFromPrevPage = location.state?.search || ""
  let vanType = searchParamsFromPrevPage.split("=")[1] || "all"

  return (
    <>
      <BackButton msg={`Back to ${vanType} vans`} backToLink={`/vans?${searchParamsFromPrevPage}`} />
      <div className="vanDetail">
        {error && <Error />}
        {isLoading ? <Loading /> : data?.length !== 0 && <>
          <div className="imageContainer">
            <img className="vanImage" src={data[0]?.imageUrl} alt={data[0]?.name} fetchpriority="high" as="image" width={300} height={300} />
          </div>
          <div className="details">
            <p className={`vanType ${data[0]?.type}`}>{data[0]?.type}</p>
            <h3 className="vanName">{data[0]?.name}</h3>
            <p className="vanPrice">${data[0]?.price} <span className="vanSub">/day</span> </p>
            <p className="vanDesc">{data[0]?.description}</p>
            <button className="rentBtn">Rent this van</button>
          </div>
        </>
        }

      </div >

    </>
  )
}

export default VanDetail
