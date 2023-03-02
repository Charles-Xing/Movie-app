import React from 'react';
import './MainView.css';
import MainViewContents from './MainViewContents/MainViewContents';
import BottomScroll from '../BottomScroll/BottomScroll';
import BottomNav from '../BottomNav/BottomNav';
import Overlay from '../Overlay/Overlay';

export default function MainView() {
  return (
    <div className='mainViewContainer'>
      <div className='background'>
        <div>
          <MainViewContents />
          <BottomScroll />
        </div>
        <div>
          <BottomNav />
        </div>
        <Overlay />
      </div>
    </div> 
  )
}
