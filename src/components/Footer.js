import './Footer.css'
import Box from '@mui/material/Box'

const Footer = () => {
    return (
        <Box component='footer'
         sx={{
            background: '#C0C0C0',
            padding: '76px'
        }}>
        <p>IMG//LOGO </p>
        <p>© Copyright 2023 LitoralEventos | Todos os Direitos Reservados</p>
        
            <a href='https://www.sympla.com.br'> Home</a>
            <a href='https://www.sympla.com.br'> Sobre</a>
            <a href='https://www.sympla.com.br'>Termos e Políticas</a>
        </Box>
    )
}

export default Footer