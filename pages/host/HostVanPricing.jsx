import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
  const [{ price }] = useOutletContext()
  return (
    <div>
      <span className="vanPricing">${price}</span>
      <span className="day">/day</span>
    </div>
  )
}

export default HostVanPricing
