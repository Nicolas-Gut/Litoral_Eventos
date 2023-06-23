import './Footer.css'
import Box from '@mui/material/Box'
import Logo from './assets/img/logo2.png'

const Footer = () => {
    return (
        <Box component='footer'
         sx={{
            background: '#C0C0C0',
            padding: '120px'
        }}>
        <img src={Logo} style={{width: '15%'}} />
        <p>© Copyright 2023 LitoralEventos | Todos os Direitos Reservados</p>
        
            <a href='/'> Home</a>
            <a href='/quem-somos'> Sobre</a>
            <a href='*'>Termos e Políticas</a>
        </Box>
    )
}

export default Footer