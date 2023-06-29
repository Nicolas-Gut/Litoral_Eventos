import React from 'react';
import {useState, useEffect, useRef} from 'react'
import './ImageSlider.css'
import { motion } from 'framer-motion'

import I1 from './assets/img/teto.jpg';
import I2 from './assets/img/tiago.jpg';
import I3 from './assets/img/pedro.jpg';
import I4 from './assets/img/lexa.jpg';
import I5 from './assets/img/luan.jpg';
import I6 from './assets/img/iza.jpg';
import I7 from './assets/img/AnaVitoria.jpg';

const images = [
  { image: I1, text: "Teto", additionalText: "Data: 16/07/2023" },
  { image: I2, text: "Tiago Iorc", additionalText: "Data: 16/02/2024"},
  { image: I3, text: "Pedro Sampaio", additionalText: "Data: 30/11/2023" },
  { image: I4, text: "lexa", additionalText: "Data: 16/10/2023" },
  { image: I5, text: "Luan Santana", additionalText: "Data: 11/07/2023" },
  { image: I6, text: "Iza", additionalText: "Data: 18/08/2023" },
  { image: I7, text: "Ana Vitoria", additionalText: "Data: 20/09/2023"},
];

function ImageSlider() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (    
    
    <div className='imageSlider'>
      
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div className='inner'
        drag="x"
        dragConstraints={{ right: 0, left: -width}}
        initial={{ x: 100}}
        animate= {{ x: 0}}
        transition={{ duration: 0.8}}
        >
          
          {/* <div className="shows-text"><h1>Shows</h1></div> */}

        {images.map((item, index) => (
          <motion.div className='item' key={index}>
            <img src={item.image} alt="Texto alt" />
            <p>{item.text}</p>
            {item.additionalText && <p>{item.additionalText}</p>}
          </motion.div>
        ))}

        </motion.div>
      </motion.div>
    </div>
    );
    
};

export default ImageSlider;
