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
import NotFound from './pages/NotFound.jsx';

import getApiVans from './pages/utils/getApiVans.js';

const BASE_URL = "https://van-server.onrender.com/api/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="vans" loader={() => getApiVans(BASE_URL + "vans")} element={<Vans />} />
      <Route path="vans/:id" loader={({ params }) => getApiVans(BASE_URL + 'vans/' + params.id)} element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" >
          <Route index element={<HostVanList linkTo={"/host/vans"} />} />
          <Route path=":id" element={<HostVanFullDetail />}>
            <Route index element={<HostVanDef />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path=":id/edit" element={<HostVanEdit />} />
        </Route>
      </Route>
      <Route path="host" element={<HostLayout />}>
        <Route index
          loader={() => getApiVans(BASE_URL + "host/vans/123")}
          element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans">
          <Route index
            loader={() => getApiVans(BASE_URL + "host/vans/123")}
            element={<HostVanList linkTo={"/host/vans"} />} />
          <Route path=":id" loader={({ params }) => getApiVans(BASE_URL + `host/vans/123/${params.id}`)} element={<HostVanFullDetail />}>
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