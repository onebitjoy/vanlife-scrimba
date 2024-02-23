import "./vans.css"
import { useEffect, useState } from "react"

import VansList from "./components/VansList.jsx"
import Filter from "./components/Filter.jsx"
import Loading from "./components/Loading.jsx"
import Error from "./components/Error.jsx"

import { useSearchParams } from "react-router-dom"
import useFetch from "./utils/useFetch.js"

function Vans() {

  const { data, loading, error } = useFetch({ url: "/api/vans", dependencies: [] })
  const [filteredVans, setFilteredVans] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  let typeFilter = searchParams.get("type")

  /* functions */
  function handleClearFilter() {
    if (!typeFilter) return;
    handleSetSearchParams("")
  }
  function handleSetSearchParams(vantype) {
    setSearchParams({ type: vantype })
  }

  /* useEffects */
  useEffect(() => {
    function handleVanFilters() {
      if (typeFilter) {
        const filvans = data?.vans?.filter(van => van.type === typeFilter)
        setFilteredVans(filvans)
      }
      else {
        setFilteredVans(data?.vans)
      }
    }
    handleVanFilters()
  }, [typeFilter, data?.vans])

  return (<div className="vansContainer">
    <h3>Explore our van options</h3>
    <Filter onFilter={handleSetSearchParams} onClear={handleClearFilter} currentFilter={typeFilter} />
    {loading && <Loading />}
    {data?.length !== 0 && <VansList filVans={filteredVans} loading={loading} />}
    {error && <Error />}
  </div>
  )
}

export default Vans