import { Suspense, useState } from "react"
import "./vandetail.css"
import { Await, defer, useLoaderData, useLocation, useNavigation, useParams } from "react-router-dom";
import Loading from "./Loading.jsx"
import BackButton from "./BackButton.jsx";

const BASE_URL = "https://van-server.onrender.com/api/";
export async function loader({ params }) {
  const data = getApiVans(BASE_URL + 'vans/' + params.id)
  return defer({ vans: data })
}

function VanDetail() {
  const dataPromise = useLoaderData()

  const location = useLocation()
  let searchParamsFromPrevPage = location.state?.search || ""
  let vanType = searchParamsFromPrevPage.split("=")[1] || "all"

  function vandetail({ data }) {
    return <>
      <div className="imageContainer">
        <img className="vanImage" src={data[0]?.imageUrl} alt={data[0]?.name}
          // fetchpriority="high" as="image" 
          width={300} height={300} />
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


  return (
    <>
      <BackButton msg={`Back to ${vanType} vans`}
        backToLink={`/vans?${searchParamsFromPrevPage}`} />

      <div className="vanDetail">
        {/* <Suspense fallback={<Loading />}> */}
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.data}>
            {vandetail}
          </Await>
        </Suspense>
        {/* </Suspense> */}
      </div >

    </>
  )
}

export default VanDetail
