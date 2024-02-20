import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Layout from './components/Layout.jsx';

/* Default Page Imports*/
import Home from './pages/Home.jsx';
import Vans from './pages/Vans.jsx';
import About from './pages/About.jsx';
import VanDetail from './components/VanDetail.jsx';

/* Host Page Imports */
import HostLayout from './pages/Host/HostLayout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVanList from './pages/Host/HostVanList.jsx';
import HostVanEdit from './pages/Host/HostVanEdit.jsx';
import HostVanFullDetail from './pages/Host/HostVanFullDetail.jsx';
import HostVanDef from './pages/Host/HostVanDef.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';

//App
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" >
              <Route index element={<HostVanList linkTo={"/host/vans"} />} />
              <Route path=":id" element={<HostVanFullDetail />}>
                <Route index element={<HostVanDef />} />
                <Route path="pricing" element={<HostVanPhotos />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path=":id/edit" element={<HostVanEdit />} />
            </Route>

          </Route>

        </Route>
      </Routes>
    </BrowserRouter >
  )
}