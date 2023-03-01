import React, { useState } from 'react';
import './SideNavigation.css';
import { IoChevronDownSharp, IoSearchOutline, IoTrendingUpSharp } from "react-icons/io5";
import { RiHome2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";
import { RxGear } from "react-icons/rx";
import { MdMovie } from "react-icons/md";


export default function SideNavigation() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function toggleSideNav() {
    setSideNavOpen(!sideNavOpen)
  }

  return (
    <div className='sideNavContainer'>
      <div className={sideNavOpen ? 'sideNavOpen' : 'sideNav'}>
        <div  className='navContents'>
          <div className='chevronDown' onClick={toggleSideNav}>
            <div className='chevronDownIcon' >
              <IoChevronDownSharp />  
            </div>
            {sideNavOpen && <div className='play'>PLAY</div>}
          </div>
          
          <div className='mainButton'>
            <div>
              <a href="/">
                <IoSearchOutline />
                {sideNavOpen && <div>Search</div>}
              </a>  
            </div>
            <div>
              <a href="/" class="active">
                <RiHome2Line />
                {sideNavOpen && <div>Home</div>}
              </a>
            </div>
            <div>
              <a href="/">
                <IoTrendingUpSharp />
                {sideNavOpen && <div>Trending</div>}
              </a>  
            </div>
            <div>
              <a href="/">
                <BsCameraReels />
                {sideNavOpen && <div>Web Series</div>}
              </a>  
            </div>
            <div>
              <a href="/">
                <MdMovie />
                {sideNavOpen && <div>Movies</div>}
              </a>  
            </div>
          </div>
          <div className='setting'>
            <div>
              <a href="/">
                <RiCheckboxBlankCircleFill />
                {sideNavOpen && <div>ux_dhruv</div>}
              </a>  
            </div>
            <div>
              <a href="/">
                <RxGear />
                {sideNavOpen && <div>Settings</div>}
              </a>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
