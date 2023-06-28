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
  { image: I1, text: "Teto" },
  { image: I2, text: "Tiago Iorc" },
  { image: I3, text: "Pedro Sampaio" },
  { image: I4, text: "lexa" },
  { image: I5, text: "Luan Santana" },
  { image: I6, text: "Iza" },
  { image: I7, text: "Ana Vitoria" },
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

          {images.map((item, index) =>(
            <motion.div className='item' key={index}>
              <img src={item.image} alt="Texto alt" />
              <p>{item.text}</p>
            </motion.div> 
          ))}

        </motion.div>
      </motion.div>
    </div>
    );
    
};

export default ImageSlider;
