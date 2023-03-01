import React from 'react';
import './MainViewContents.css'

export default function MainViewContents() {
  return (
    <div className='contents'>
      <h1>Peaky Blinders</h1>
      <p>Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
      <div className='rating'>
        <img src="/assets/MainView/IMDB.png" alt="" />
        <span>8.8/10</span>
      </div>
      <div className='viewCount'>
        <span>2B+</span>
        <span> Streams</span>
      </div>
      <div className='btn'>
        <a href="/">Play</a>
        <a href="/">Watch Trailer</a>
      </div>
    </div>
  )
}
