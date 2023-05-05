import './Footer.css'
import Box from '@mui/material/Box'

const Footer = () => {
    return (
        <Box component='footer'
         sx={{
            background: '#C0C0C0',
            padding: '120px'
        }}>
        <p>IMG//LOGO </p>
        <p>© Copyright 2023 LitoralEventos | Todos os Direitos Reservados</p>
        
            <a href='/'> Home</a>
            <a href='/quem-somos'> Sobre</a>
            <a href='*'>Termos e Políticas</a>
        </Box>
    )
}

export default Footer