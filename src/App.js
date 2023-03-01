import React from 'react';
import './App.css';
import MainView from './components/MainView/MainView';
import SideNavigation from './components/SideNavigation/SideNavigation';
import BottomScroll from './components/BottomScroll/BottomScroll';

export default function App() {
  return (
    <div className='mainContainer'>
      <SideNavigation />
      <MainView />
      {/* <BottomScroll /> */}
    </div>
  )
}

