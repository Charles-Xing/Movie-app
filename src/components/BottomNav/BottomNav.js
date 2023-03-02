import React from 'react';
import './BottomNav.css';
import { RiHome2Line } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { IoTrendingUpSharp } from "react-icons/io5";

export default function BottomNav() {
  return (
    <div className='bottomNavContainer'>
      <div className='active'>
        <a href="/" ><RiHome2Line /></a>
      </div>
      <div>
        <a href="/"><IoTrendingUpSharp /></a>
      </div>
      <div>
        <a href="/"><BsCameraReels /></a>
      </div>
      <div>
        <a href="/"><MdMovie /></a>
      </div>
    </div>
  )
}
