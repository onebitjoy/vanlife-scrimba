import { useEffect, useState } from "react"
import "./vans.css"
import VansList from "../components/VansList.jsx"
import Filter from "../components/Filter.jsx"

async function fetcher() {

}
function Vans() {

  const [vans, setVans] = useState([])
  const [filteredVans, setFilteredVans] = useState([])
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

  useEffect(() => {

    const controller = new AbortController()

    const fetchVans = async () => {
      try {
        const data = await fetch("/api/vans", { signal: controller.signal })
        const vansData = await data.json()
        setVans(vansData.vans)
        setFilteredVans(vansData.vans)
      } catch (error) {
        alert("Can't fetch data!")
      }
    }
    fetchVans()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div className="vansContainer">
      <h3>Explore our van options</h3>
      <Filter onFilter={handleVanFilters} onClear={handleClearFilter} currentFilter={currentFilter} />
      <VansList vans={filteredVans} />
    </div>
  )
}

export default Vans
