import Box from '@mui/material/Box'


const Sidebar = () => {
    return(
        <Box component='sidebar'
        sx={{
            background: "#DDD",
            width: 200,
            height: 500,
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
       </Box>
    )
}

export default Sidebar