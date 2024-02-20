function WelcomeInfo() {
  return (
    <div className="welcomeinfo">

      <div className="welcomeBanner">
        <h2 className="welcomeh2">Welcome!</h2>
        <p className="welcomedetails">
          Income last <span className="days">30 days</span>
          <span className="welcomedetailbutton">Details</span>
        </p>
        <p className="hostPrice">$2260</p>
      </div>

      <div className="reviewScore">
        <span>Review Score</span>
        <span className="reviewStar">5.0/5</span>
        <span className="reviewdetailbutton">Details</span>
      </div>

    </div>
  )
}

export default WelcomeInfo
