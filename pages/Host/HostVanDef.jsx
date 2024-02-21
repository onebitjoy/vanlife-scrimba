import { useOutletContext } from "react-router-dom"

function HostVanDef() {
  const [{ name, description, type }] = useOutletContext()
  return (
    <div className="hostVanDesc">
      <p className="hostVanDescItem"><span className="idts">Name: </span>{name}</p>
      <p className="hostVanDescItem">
        <span className="idts">Type: </span >
        <span className="toCapital">{type}</span>
      </p>
      <p className="hostVanDescItem"><span className="idts">Description: </span>{description}</p>
      <p className="hostVanDescItem"><span className="idts">Visibility: </span>Public</p>
    </div>
  )
}

export default HostVanDef