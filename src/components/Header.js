import './Header.css'
import Box from '@mui/material/Box'
import logo from '../components/assets/img/logo1.png'

const Header = () => {
    return (
        <Box component='header'>
            <h1>logo litoral</h1>
            <a href='/users'>Seja Um Produtor</a>
            <button >Acessar Conta</button>
        </Box>
    )
}

export default Header