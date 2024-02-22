import "./vans.css"
import { useEffect, useState } from "react"

import VansList from "../components/VansList.jsx"
import Filter from "../components/Filter.jsx"
import { useSearchParams } from "react-router-dom"

function Vans() {

  const [vans, setVans] = useState([])
  const [filteredVans, setFilteredVans] = useState(vans)
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
    const controller = new AbortController()
    async function fetchVans() {
      const data = await fetch("/api/vans", { signal: controller.signal })
      const vansdata = await data.json()

      setVans(vansdata.vans)
    }

    fetchVans()
    return () => { controller.abort() }
  }, [])

  useEffect(() => {
    function handleVanFilters() {
      if (typeFilter) {
        const filvans = vans.filter(van => van.type === typeFilter)
        setFilteredVans(filvans)
      }
      else {
        setFilteredVans(vans)
      }
    }
    handleVanFilters()
  }, [typeFilter, vans])


  // if (!vans?.length) return <Loading />
  return (<div className="vansContainer">
    <h3>Explore our van options</h3>
    <Filter onFilter={handleSetSearchParams} onClear={handleClearFilter} currentFilter={typeFilter} />
    <VansList vans={filteredVans} />
  </div>
  )
}

export default Vans