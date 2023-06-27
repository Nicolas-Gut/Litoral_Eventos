import Box from '@mui/material/Box'
import Header from '../components/Header'
// import MainMenu from '../components/MainMenu'
// import Sidebar from '../components/Sidebar'
// import Content from '../components/Content'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
// import ImageSlider from '../components/ImageSlider'
import Cards from '../components/Cards'



const Home = () => {
  return (
    <>
      <Header />

      {/* <ImageSlider /> */}
      
      <Carousel />

      <Box sx={{
        display: 'flex',
      }}>
       
        {/* <Content /> */}
      </Box>

      <Box style={{ display: 'flex' }}>
        <Cards
          imageSrc="caminho_da_imagem"
          title="Título do Card"
          date="Data"
        />

        <Cards 
          imageSrc="caminho_da_imagem"
          title="Título do Card"
          date="Data"
        />
      </Box>
      <Footer />
    </>
  )
}

export default Home