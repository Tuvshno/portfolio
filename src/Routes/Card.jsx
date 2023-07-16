import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card" style={{ backgroundImage: `url(${props.imgSrc})` }}>
      <div className="overlay"></div>
      <div className="card__content">
        <div className='card-title'>{props.project}</div>
        <div className='card-explain'>{props.explaination}</div>
      </div>
      <div className="card__website">
        <p>Website</p>
      </div>
    </div>
  );
}

export default Card;


