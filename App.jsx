import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import "./App.css"
import Layout from './pages/components/Layout.jsx';

/* Default Page Imports*/
import Home from './pages/Home.jsx';
import Vans from './pages/Vans.jsx';
import About from './pages/About.jsx';
import VanDetail from './pages/components/VanDetail.jsx';

/* host Page Imports */
import HostLayout from './pages/host/HostLayout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostVanList from './pages/host/HostVanList.jsx';
import HostVanEdit from './pages/host/HostVanEdit.jsx';
import HostVanFullDetail from './pages/host/HostVanFullDetail.jsx';
import HostVanDef from './pages/host/HostVanDef.jsx';
import HostVanPhotos from './pages/host/HostVanPhotos.jsx';
import HostVanPricing from './pages/host/HostVanPricing.jsx';
import Cntxt from './pages/host/Cntxt.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<Cntxt />}>
          <Route index element={<HostVanList linkTo={"/host/vans"} />} />
          <Route path=":id" element={<HostVanFullDetail />}>
            <Route index element={<HostVanDef />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path=":id/edit" element={<HostVanEdit />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

//App
export function App() {
  return (
    <RouterProvider router={router} />
  )
}