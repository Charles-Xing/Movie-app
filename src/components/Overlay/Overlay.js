import React, { useState }from 'react';
import './Overlay.css';
import { SlMenu } from "react-icons/sl";
import SideNavigation from '../SideNavigation/SideNavigation';

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleToggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className='overlayContainer'>
      <button onClick={handleToggleOverlay}>
        <SlMenu />
      </button>
      {showOverlay && (
        <div className="overlay" onClick={handleToggleOverlay}></div>
      )}
      <div>
        <SideNavigation />
      </div>
    </div>
  );
}
