import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from './assets/img/1f.jpg'
import foto2 from './assets/img/2f.jpg'
import foto3 from './assets/img/3f.jpg'

const App = () => {
    return (
      <div sx={{width: '50%', margin: '100px', height:'50%'}}>
        <h1>Meu Carousel</h1>
        <Carousel >
          <div>
            <img src={foto1} alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src={foto2} alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src={foto3} alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
        </Carousel>
      </div>
    );
  };
  
  export default App;
  