import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from 'react-router-dom';
import "./App.css"
import Layout from './pages/components/Layout.jsx';

/* Default Page Imports*/
import Home from './pages/Home.jsx';
import Vans, { loader as vansLoader } from './pages/Vans.jsx';
import About from './pages/About.jsx';
import VanDetail, { loader as vanDetailLoader } from './pages/components/VanDetail.jsx';

/* host Page Imports */
import HostLayout from './pages/host/HostLayout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostVanList, { loader as hostVansLoader } from './pages/host/HostVanList.jsx';
import HostVanEdit from './pages/host/HostVanEdit.jsx';
import HostVanFullDetail, { loader as hostVanDetailLoader } from './pages/host/HostVanFullDetail.jsx';
import HostVanDef from './pages/host/HostVanDef.jsx';
import HostVanPhotos from './pages/host/HostVanPhotos.jsx';
import HostVanPricing from './pages/host/HostVanPricing.jsx';
import NotFound from './pages/NotFound.jsx';

import Error from './pages/components/Error.jsx';
import HostLogin, { action as loginAction } from './pages/host/HostLogin.jsx';
import HostSignUp from './pages/host/HostSignUp.jsx';
import checkAuth from './pages/utils/checkAuth.js';

const BASE_URL = "https://van-server.onrender.com/api/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* vans */}
      <Route path="vans"
        errorElement={<Error />} element={<Vans />}
        loader={vansLoader} />
      <Route path="vans/:id"
        errorElement={<Error />}
        loader={vanDetailLoader}
        element={<VanDetail />} />

      {/* login and signup */}
      <Route path='login' action={loginAction} element={<HostLogin />} />
      <Route path='signup' element={<HostSignUp />} />

      {/* host */}
      <Route path="host" element={<HostLayout />}
        loader={async ({ request }) => {
          await checkAuth(request)
          return null
        }
        }>
        <Route index errorElement={<Error />} element={<Dashboard />}
          loader={async ({ request }) => {
            await checkAuth(request)
            return await hostVansLoader()
          }} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />

        {/* host vans */}
        <Route path="vans">

          <Route index errorElement={<Error />} element={<HostVanList linkTo={"/host/vans"} />}
            loader={async ({ request }) => {
              await checkAuth(request)
              return await hostVansLoader()
            }} />

          <Route path=":id"
            errorElement={<Error />}
            element={<HostVanFullDetail />}
            loader={async ({ request, params }) => {
              await checkAuth(request)
              return await hostVanDetailLoader(params)
            }}>
            <Route index element={<HostVanDef />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>

          <Route path=":id/edit" element={<HostVanEdit />} />

        </Route>
        {/* host vans end */}

      </Route>
      {/* host end */}

      <Route path="*" element={<NotFound />} />
    </Route >
  )
)

//App
export function App() {
  return (
    <RouterProvider router={router} />
  )
}