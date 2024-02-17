import "./About.css"
function About() {

  return (
    <div className="aboutOuter">
      <div className="aboutInner">
        <div className="imgContainer" width="100%" height="480">
          <img rel="preload" src="/vantop.png" alt="a man atop a van" decoding="async" fetchpriority="high" />
        </div>

        <div className="aboutContainer">
          <div className="aboutDetails">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
              (Hitch costs extra 😉)
            </p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </div>

          <div className="aboutInteraction">
            <div className="msg">
              <h2>Your destination is waiting.</h2>
              <h2>Your van is ready.</h2>
            </div>
            <button>Explore our vans</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About
