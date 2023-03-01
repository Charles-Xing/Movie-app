import React, { useState } from 'react';
import hoverCardData from './HoverCardData';
import './HoverCard.css'

export default function HoverCard() {
  const [cardHovered, setCardHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setCardHovered(id);
  };

  const handleMouseLeave = () => {
    setCardHovered(false);
  };

  return (
    <div className='card'>
      {hoverCardData.map((card) => (
        <div
          key={card.id}
          className="cardContainer"
          onMouseEnter={() => handleMouseEnter(card.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={card.src} alt={card.alt} />
          {cardHovered === card.id && (
            <div className="image-overlay">
              <div className="overlay-content">
                <img src={card.src} alt={card.alt} />
                <p>{card.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
