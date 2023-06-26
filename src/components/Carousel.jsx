import './Carousel.css'
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from './assets/img/S1.jpg'
import foto2 from './assets/img/S2.jpeg'
import foto3 from './assets/img/S3.jpeg'
import foto4 from './assets/img/I4.jpg'

const App = () => {
    return (
      <div className='container'>
        <Carousel autoPlay={true} interval={2000} className='carousel-wrapper'>
          <div>
            <img src={foto1} alt="Slide 1" />
            <p className="legend">Numanice</p>
          </div>
          <div>
            <img src={foto2} alt="Slide 2" />
            <p className="legend">Tiago Iorc</p>
          </div>
          <div>
            <img src={foto3} alt="Slide 3" />
            <p className="legend">Festival AFROPUNK Bahia 2023</p>
          </div>
          <div>
            <img src={foto4} alt="Slide 4" />
            <p className="legend">Slide Teste4</p>
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default App;
  