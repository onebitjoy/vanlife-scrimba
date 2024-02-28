import "./vans.css"
import { memo, useEffect, useMemo, useState } from "react"

import VansList from "./components/VansList.jsx"
import Filter from "./components/Filter.jsx"
import Error from "./components/Error.jsx"
import Loading from "./components/Loading.jsx"

import { useLoaderData, useNavigation, useSearchParams } from "react-router-dom"

function Vans() {
  const { data, error } = useLoaderData()

  const loading = useNavigation()
  const isLoading = loading.state === "loading"
  const [filteredVans, setFilteredVans] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams()
  let typeFilter = searchParams.get("type")

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

  /* useEffects */
  useEffect(() => {
    function handleVanFilters() {
      if (typeFilter) {
        const filvans = data?.filter(van => van.type === typeFilter)
        setFilteredVans(filvans)
      }
      else {
        setFilteredVans(data)
      }
    }
    handleVanFilters()
  }, [typeFilter, data])

  return (<div className="vansContainer">
    <h3>Explore our van options</h3>
    <Filter onFilter={handleSetSearchParams} onClear={handleClearFilter} currentFilter={typeFilter} />
    {data?.length !== 0 ? <VansList filVans={filteredVans} /> : isLoading ? <Loading /> : <></>}
    {error && <Error />}
  </div>
  )
}

export default Vans