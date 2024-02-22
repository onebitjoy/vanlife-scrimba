function Filter({ onFilter, onClear, currentFilter }) {
  return (
    <div className="filters">
      <button
        onClick={() => onFilter("simple")}
        className={`${currentFilter === "simple" ? "simple" : ""}`}
      >
        Simple
      </button>
      <button
        onClick={() => onFilter("luxury")}
        className={`${currentFilter === "luxury" ? "luxury" : ""}`}
      >
        Luxury
      </button>
      <button
        onClick={() => onFilter("rugged")}
        className={`${currentFilter === "rugged" ? "rugged" : ""}`}
      >
        Rugged
      </button>

      <button className="filterClear" onClick={onClear}>Clear Filters</button>
    </div >
  )
}

export default Filter
