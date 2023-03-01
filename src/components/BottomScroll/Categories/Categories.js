import React from 'react';
import './Categories.css';

export default function Categories() {
  const data = [
    {
      id:'1',
      title: 'Action',
      backgroundImage: '/assets/Categories/action.png'
    },
    {
      id:'2',
      title: 'Drama',
      backgroundImage: '/assets/Categories/drama.png'
    },
    {
      id:'3',
      title: 'SciFi',
      backgroundImage: '/assets/Categories/scifi.png'
    },
    {
      id:'4',
      title: 'Horror',
      backgroundImage: '/assets/Categories/horror.png'
    },
    {
      id:'5',
      title: 'Animation',
      backgroundImage: '/assets/Categories/animation.png'
    },
    {
      id:'6',
      title: 'Serail',
      backgroundImage: '/assets/Categories/serail.png'
    }
  ];

  const categoryData = data.map((item) => {
    const categoryTitle = `${item.title}`;
    const categoryBackgroundImage = `${item.backgroundImage}`;

    return {
      id:item.id,
      title: categoryTitle,
      backgroundImage: categoryBackgroundImage
    };
  });

  return (
    <div className='cateContainer'>
      <div className='categories'>
        {categoryData.map((item) => (
          <div key={item.id} className='category'>
            <img src={process.env.PUBLIC_URL + item.backgroundImage} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>  
  );
}
