import { useEffect, useRef } from 'react';
import caicara from './assets/img/caicara.mp4'

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div >
      <video ref={videoRef} autoPlay muted loop style={{width:'100%'}}>
        <source src={caicara} type="video/mp4" />
      </video>
      {/* Restante do conteúdo da página */}
    </div>
  );
}

export default Home;
