import React from 'react';
import './MainView.css';
import MainViewContents from './MainViewContents/MainViewContents';
import BottomScroll from '../BottomScroll/BottomScroll';

export default function MainView() {
  return (
    <div className='mainViewContainer'>
      <div className='background'>
        <MainViewContents />
        <BottomScroll />
      </div>
    </div> 
  )
}
