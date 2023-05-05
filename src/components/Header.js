import './Header.css'
import Box from '@mui/material/Box'
import logo from '../components/assets/img/logo1.png'

const Header = () => {
    return (
        <Box component='header'>
            <h1>logo litoral</h1>
            <div>
                <a href='/users'>Seja Um Produtor</a>
                <button >Acessar Conta</button>
            </div>
            
        </Box>
    )
}

export default Header