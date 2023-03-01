import React from 'react'
import NewThisWeek from './NewThisWeek/NewThisWeek'
import './BottomScroll.css'
import Categories from './Categories/Categories'
// import HoverCard from './HoverCard/HoverCard'

export default function BottomScroll() {
  return (
    <div className='scroll'>
      <div className='scrollContents'>
        <div className='scrollTitle'>
          New This Week
        </div>
        <NewThisWeek />
        <div className='scrollTitle'>
          Categories
        </div>
        <Categories />
      </div>  
    </div>
  )
}
