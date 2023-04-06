import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const MainMenu = () => { 
    return (
        <Box component='nav' sx={styles.nav}>
            <ul style={styles.ulMenu}>menu...</ul>
            <Button variant="contained">Contained</Button>
        </Box>
    )
}

const styles = {
    nav: {
        background: '#555',
        color: '#000',
        padding: '20px'
        // marginTop: '5px'
    },
    ulMenu: {
        listStyleType: 'none'
    }
}


export default MainMenu