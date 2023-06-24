import './Footer.css'
import Box from '@mui/material/Box'
import Logo from './assets/img/logoO2.png'

const Footer = () => {
    return (
        <Box component='footer'
         sx={{
            background: 'rgb(76 87 108 / 66%)',
            padding: '120px'
        }}>
        <img src={Logo} alt='logo Litoral Eventos' style={{width: '15%', marginBottom: '-36px'}} />
        <p>© Copyright 2023 LitoralEventos | Todos os Direitos Reservados</p>
        
            <a href='/'> Home</a>
            <a href='/quem-somos'> Sobre</a>
            <a href='*'>Termos e Políticas</a>
        </Box>
    )
}

export default Footer