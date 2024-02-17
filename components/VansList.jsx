import { Link } from "react-router-dom"
import "./vansList.css"

function VansList({ vans }) {

  if (!vans) return <Loading />
  return (
    <div className="vans">

      {vans.map((van) => {
        return <div className="van" key={van.id}>

          <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} alt={van.name} className="vanImg" width="200" height="200" />
            <div className="vanInfoContainer">
              <div className="vanSpan">
                <span className="name">{van.name}</span>
                <div className="priceContainer">
                  <span className="price">$ {van.price}</span>
                  <span className="priceSub">/day</span>
                </div>
              </div>
              <div className={`type ${van.type}`} >{van.type}</div>
            </div>
          </Link>

        </div>
      })}

    </div>
  )
}

export default VansList
