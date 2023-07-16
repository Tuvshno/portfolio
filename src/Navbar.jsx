import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineFolder, AiOutlineVideoCameraAdd, AiOutlineCode, AiOutlineCustomerService } from 'react-icons/ai';
import { PiPlantLight, PiPaintBrushDuotone } from 'react-icons/pi';
import { RiMovie2Line, RiMovieLine, RiPlantFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/Fi';
import { IoMdInformationCircleOutline } from 'react-icons/Io';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const getButtonClass = (path) => {
    return location.pathname === path ? 'navbar-button active' : 'navbar-button';
  };

  const getIconClass = (path) => {
    return location.pathname === path ? 'button-icon active' : 'button-icon';
  };

  return (
    <div className="navbar-container">
        <Link to="/" className="navbar-nametag">
          <RiPlantFill className='icon' />
          <div>
            <h1 className='name'>Tuvshinbayar Otgonbayar</h1>
            <h2 className='job'>Full Stack Engineer</h2>
          </div>
        </Link>
        <div className="navbar-button-container">

          <div className='navbar-button-section'>
            <h1 className='section-tag'>WHAT I CREATE</h1>
            <Link to="/Projects" className={getButtonClass('/Projects')}>
              <AiOutlineFolder className={getIconClass('/Projects')} />
              Projects
            </Link>

            <Link to="/VideoEditing" className={getButtonClass('/VideoEditing')}>
              <AiOutlineVideoCameraAdd className={getIconClass('/VideoEditing')} />
              Video Editing
            </Link>
          </div>

          <div className='navbar-button-section'>
            <h1 className='section-tag'>WHAT I USE</h1>
            <Link to="/Technology" className={getButtonClass('/Technology')}>
              <AiOutlineCode className={getIconClass('/Technology')} />
              Technology
            </Link>

            <Link to="/Music" className={getButtonClass('/Music')}>
              <AiOutlineCustomerService className={getIconClass('/Music')} />
              Music
            </Link>
          </div>

          <div className='navbar-button-section'>
            <h1 className='section-tag'>WHAT I LOVE</h1>
            <Link to="/Movies" className={getButtonClass('/Movies')}>
              <RiMovie2Line className={getIconClass('/Movies')} />
              Movies
            </Link>

            <Link to="/Shows" className={getButtonClass('/Shows')}>
              <RiMovieLine className={getIconClass('/Shows')} />
              Shows
            </Link>

            <Link to="/Plants" className={getButtonClass('/Plants')}>
              <PiPlantLight className={getIconClass('/Plants')} />
              Plants
            </Link>

            <Link to="/Art" className={getButtonClass('/Art')}>
              <PiPaintBrushDuotone className={getIconClass('/Art')} />
              Art
            </Link>
          </div>

          <div className='navbar-button-section'>
            <h1 className='section-tag'>WHERE TO FIND ME</h1>
            <a href="https://github.com/Tuvshno" target="_blank" rel="noopener noreferrer" className='navbar-button'>
              <FiGithub className='button-icon' />
              GitHub
            </a>

            <Link to="/ContactMe" className={getButtonClass('/ContactMe')}>
              <IoMdInformationCircleOutline className={getIconClass('/ContactMe')} />
              Contact Me
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Navbar;
