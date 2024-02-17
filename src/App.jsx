import { Route, Routes } from 'react-router-dom';
import './App.css';

import NotFound from "./pages/NotFound/NotFound";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Facilities from './pages/Facilities/Facilities';
import Induk from './pages/Villa/Induk';
import Puncak from './pages/Villa/Puncak';
import Asalia from './pages/Villa/Asalia';
import Mawar from './pages/Villa/Mawar';
import Elang from './pages/Villa/Elang';
import LayoutVilla from './pages/Villa/LayoutVilla';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="facilities" element={<Facilities />} />

        <Route path='/villa' element={<LayoutVilla />}>
          <Route path="induk" element={<Induk />} />
          <Route path="puncak" element={<Puncak />} />
          <Route path="asalia" element={<Asalia />} />
          <Route path="mawar" element={<Mawar />} />
          <Route path="elang" element={<Elang />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
