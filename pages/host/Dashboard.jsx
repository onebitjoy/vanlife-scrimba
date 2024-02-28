import "./dashboard.css"
import WelcomeInfo from "./WelcomeInfo"
import HostVanList from "./HostVanList"

// export async function loadVans() {
//   return (await fetch("host/vans")).json()
// }

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <WelcomeInfo />
      <HostVanList linkTo={"/host/vans"} linkToSuffix="edit" />
    </div>
  )
}

export default Dashboard
