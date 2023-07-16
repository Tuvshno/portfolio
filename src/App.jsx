import './App.css'
import Navbar from './Navbar'
import Home from './Routes/Home'
import { Routes, Route, Link } from 'react-router-dom'

import Projects from './Routes/Projects';
import Art from './Routes/Art';
import ContactMe from './Routes/ContactMe';
import Movies from './Routes/Movies';
import Music from './Routes/Music';
import Plants from './Routes/Plants';
import Shows from './Routes/Shows';
import Technology from './Routes/Technology';
import VideoEditing from './Routes/VideoEditing';

function App() {

  return (
    <>
      <div className='app-grid-container'>
        <Navbar className='navbar' />
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Projects" element={<Projects />} />
            <Route path="/VideoEditing" element={<VideoEditing />} />

            <Route path="/Technology" element={<Technology />} />
            <Route path="/Music" element={<Music />} />

            <Route path="/Movies" element={<Movies />} />
            <Route path="/Shows" element={<Shows />} />
            <Route path="/Plants" element={<Plants />} />
            <Route path="/Art" element={<Art />} />

            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </div>

      </div>

    </>
  )
}

export default App
