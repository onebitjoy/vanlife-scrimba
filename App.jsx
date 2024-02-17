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
import HostVan from './pages/Host/HostVan.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';

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

          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVan />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter >
  )
}