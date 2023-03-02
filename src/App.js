import React from 'react';
import './App.css';
import MainView from './components/MainView/MainView';
import SideNavigation from './components/SideNavigation/SideNavigation';

export default function App() {
  return (
    <div>
      <div className='mainContainer'>
        <SideNavigation />
        <MainView />
      </div> 
    </div>
  )
}

