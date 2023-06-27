import React from 'react';
import './Card.css';
// import i1 from '../components/assets/img/I1.jpg'

const Card = () => {
  const imageSrc = require('../components/assets/img/I1.jpg').default;
  const title = 'Título do ';
  const date = 'Data';

  return (
    <div className="card" >
      <img src={imageSrc} alt="Descrição da imagem" />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;