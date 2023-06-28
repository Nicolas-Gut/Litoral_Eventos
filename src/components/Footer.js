import './Footer.css'
import {FiInstagram as Insta} from 'react-icons/fi'
import {FaTiktok as TikTok} from 'react-icons/fa'

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
            <a href='*'>Termos e Políticas</a>

            <div className='social-icon'>
        <a href="https://instagram.com/litoraleventos2023?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer">
            <Insta />
        </a>
        <a href="https://www.tiktok.com/@litoral_eventos?_t=8dYE8s055O9&_r=1 " target="_blank" rel="noreferrer">
            <TikTok />
        </a>
        </div>
        </Box>
    )
}

export default Footer