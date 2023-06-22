import Box from '@mui/material/Box'
import Header from '../components/Header'
// import MainMenu from '../components/MainMenu'
// import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'



const Home = () => {
  return (
    <>
      <Header />
      
      <Carousel />

      <Box sx={{
        display: 'flex',
      }}>
       
        <Content />
      </Box>
      <Footer />
    </>
  )
}

export default Home