import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
  const [{ imageUrl, name }] = useOutletContext()

  return (
    <div>
      <img src={imageUrl} alt={name} width={100} height={100} />
    </div>
  )
}

export default HostVanPhotos
