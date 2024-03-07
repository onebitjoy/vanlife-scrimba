import "./vans.css"
import VansList from "./components/VansList.jsx"
import Filter from "./components/Filter.jsx"

import { Suspense, useEffect, useState } from "react"
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom"
import getApiVans from "./utils/getApiVans.js"
import Loading from "./components/Loading.jsx"

const BASE_URL = "https://van-server.onrender.com/api/";

export function loader() {
  const vansPromise = getApiVans(BASE_URL + "vans")
  return defer({ vans: vansPromise })
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  let typeFilter = searchParams.get("type")
  const dataPromise = useLoaderData()

  /* functions */
  function handleClearFilter() {
    if (!typeFilter) return;
    handleSetSearchParams("")
  }

  function handleSetSearchParams(vantype) {
    if (vantype === "") {
      setSearchParams()
      return
    }
    setSearchParams({ type: vantype })
  }

  return (<div className="vansContainer">
    <h3>Explore our van options</h3>
    <Filter onFilter={handleSetSearchParams} onClear={handleClearFilter} currentFilter={typeFilter} />

    <Suspense fallback={<Loading />}>
      <Await resolve={dataPromise.vans}>
        {({ data }) => {
          const vans = data.data
          const [filteredVans, setFilteredVans] = useState(vans)
          useEffect(() => {
            function handleVanFilters() {
              if (typeFilter) {
                const filvans = vans?.filter(van => van.type === typeFilter)
                setFilteredVans(filvans)
              }
              else {
                setFilteredVans(vans)
              }
            }
            handleVanFilters()
          }, [typeFilter])
          return <VansList filVans={filteredVans} />
        }}
      </Await>
    </Suspense>

  </div>
  )
}

export default Vans