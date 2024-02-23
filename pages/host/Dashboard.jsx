import "./dashboard.css"
import WelcomeInfo from "./WelcomeInfo"
import HostVanList from "./HostVanList"

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <WelcomeInfo />
      <HostVanList linkTo={"/host/vans"} linkToSuffix="edit" />
    </div>
  )
}

export default Dashboard
