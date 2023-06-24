import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'

const MainMenu = () => { 
    return (
        <Box component="nav" sx={styles.nav}>
            <ul style={styles.ulMenu}>
                <li style={styles.li}><NavLink to='/users'>Seja um Produtor</NavLink></li>
            </ul>
        </Box>
    )
}

const styles = {
    nav: {
        color: '#DDD',
        margin: '0 0 0 auto',
        '& ul li a': {
            color: '#004580',
            textDecoration: 'none',
            padding: '0 5px 8px 5px',
            '&:hover': {
                color: '#DDD',
                borderBottom: '3px solid #058789',
            }
        }
    },
    ulMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        gap: '10px',
        listStyleType: 'none',
        padding: '0',
        margin: '0'
    },
    li: {
        padding: '0px 5px 7px 12px'
    }
}


export default MainMenu