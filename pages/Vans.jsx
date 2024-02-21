import { useEffect, useState } from "react"
import "./vans.css"
import VansList from "../components/VansList.jsx"
import Filter from "../components/Filter.jsx"
import { useOutletContext } from "react-router-dom"
import Loading from "../components/Loading.jsx"

function Vans() {

  const { vans } = useOutletContext()
  const [filteredVans, setFilteredVans] = useState(vans)
  const [currentFilter, setCurrentFilter] = useState(null)

  function handleVanFilters(vantype) {
    setFilteredVans(vans.filter(van => {
      return van.type === vantype
    }))
    setCurrentFilter(vantype)
  }

  function handleClearFilter() {
    setFilteredVans(vans)
    setCurrentFilter("")
  }

  if (!vans.length) return <Loading />
  return (
    <div className="vansContainer">
      <h3>Explore our van options</h3>
      <Filter onFilter={handleVanFilters} onClear={handleClearFilter} currentFilter={currentFilter} />
      <VansList vans={filteredVans} />
    </div>
  )
}

export default Vans