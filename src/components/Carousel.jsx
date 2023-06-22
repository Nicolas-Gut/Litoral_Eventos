import './Carousel.css'
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from './assets/img/I1.jpg'
import foto2 from './assets/img/I2.jpg'
import foto3 from './assets/img/I3.jpg'
import foto4 from './assets/img/I4.jpg'
import foto5 from './assets/img/I5.jpg'

const App = () => {
    return (
      <div className='container'>
        <Carousel autoPlay={true} interval={2000}>
          <div>
            <img src={foto1} alt="Slide 1" />
            <p className="legend">Slide Teste1</p>
          </div>
          <div>
            <img src={foto2} alt="Slide 2" />
            <p className="legend">Slide Teste2</p>
          </div>
          <div>
            <img src={foto3} alt="Slide 3" />
            <p className="legend">Slide Teste3</p>
          </div>
          <div>
            <img src={foto4} alt="Slide 4" />
            <p className="legend">Slide Teste4</p>
          </div>
          <div>
          <img src={foto5} alt="Slide 5" />
            <p className="legend">Slide Teste5</p>
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default App;
  