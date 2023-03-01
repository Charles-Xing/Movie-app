import React from 'react'
import './NewThisWeek.css'
// import HoverCard from '../HoverCard/HoverCard';

export default function NewThisWeek() {
  const data = [
    {
      id:'1',
      title: 'The Rings of Power',
      backgroundImage: '/assets/NewThisWeek/movie1.png'
    },
    {
      id:'2',
      title: 'NOPE',
      backgroundImage: '/assets/NewThisWeek/movie2.png'
    },
    {
      id:'3',
      title: 'TENET',
      backgroundImage: '/assets/NewThisWeek/movie3.png'
    },
    {
      id:'4',
      title: 'Dark Season-1',
      backgroundImage: '/assets/NewThisWeek/movie4.png'
    },
    {
      id:'5',
      title: 'Squid Games Season-1',
      backgroundImage: '/assets/NewThisWeek/movie5.png'
    },
    {
      id:'6',
      title: 'Only Murder In The Building',
      backgroundImage: '/assets/NewThisWeek/movie6.png'
    }
  ];

  const movieData = data.map((item) => {
    const movieTitle = `${item.title}`;
    const movieBackgroundImage = `${item.backgroundImage}`;

    return {
      id:item.id,
      title: movieTitle,
      backgroundImage: movieBackgroundImage
    };
  });

  return (
    <div className='newContainer'>
      <div className='newThisWeekRow'>
        {movieData.map((item) => (
          <div key={item.id} className='movie'>
            <img src={process.env.PUBLIC_URL + item.backgroundImage} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {/* <HoverCard /> */}
    </div>  
  );
};