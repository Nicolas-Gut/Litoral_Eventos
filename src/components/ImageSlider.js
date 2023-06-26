import React from 'react';
import {useState, useEffect, useRef} from 'react'
import './ImageSlider.css'
import { motion } from 'framer-motion'

import I1 from './assets/img/I5.jpg';
import I2 from './assets/img/I1.jpg';
import I3 from './assets/img/I5.jpg';

const images = [I1, I2, I3, I2, I3]

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

          {images.map(image =>(
            <motion.div className='item' key={image}>
              <img src={image} alt="Texto alt" />
              <p style={{display: 'flex', alignItems: 'center'}}>teste</p>
            </motion.div> 
          ))}

        </motion.div>
      </motion.div>
    </div>
    );
    
};

export default ImageSlider;
