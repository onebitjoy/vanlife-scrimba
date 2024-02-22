import { Link } from "react-router-dom"
import "./vansList.css"

function VansList({ vans }) {

  if (!vans) return <Loading />
  return (
    <div className="vans">

      {vans.map(({ id, imageUrl, name, price, type }) => {
        return <div className="van" key={id}>

          <Link to={`/vans/${id}`}>
            <img src={imageUrl} alt={name} className="vanImg" width="200" height="200" />
            <div className="vanInfoContainer">
              <div className="vanSpan">
                <span className="name">{name}</span>
                <div className="priceContainer">
                  <span className="price">$ {price}</span>
                  <span className="priceSub">/day</span>
                </div>
              </div>
              <div className={`type ${type}`} >{type}</div>
            </div>
          </Link>

        </div>
      })}

    </div>
  )
}

export default VansList
