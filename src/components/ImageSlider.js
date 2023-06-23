import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Arquivo CSS personalizado para estilização
import I1 from './assets/img/I5.jpg';
import I2 from './assets/img/I2.jpg';
import I3 from './assets/img/I1.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Exibir 3 imagens por vez (ajuste conforme necessário)
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={I1} alt="Imagem 1" className="circular-image" />
        </div>
        <div className="slider-item">
          <img src={I2} alt="Imagem 2" className="circular-image" />
        </div>
        <div className="slider-item">
          <img src={I3} alt="Imagem 3" className="circular-image" />
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
