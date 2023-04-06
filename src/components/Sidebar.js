import Box from '@mui/material/Box'
import fotoMontanha from './assets/img/montanha.jpeg'
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import { 
    FaCartPlus as IconCarrinnhoMais, 
    FaDiscord as Discord} 
from 'react-icons/fa'
import { BsFillEggFill as Ovin } from 'react-icons/bs'

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

{/*1º img link direto*/}
            <img 
            style={{
                width: 198,
                height: 124.75
            }} 
            src="https://images.memphistours.com/large/3543a46423168e1ea943d8c8113c5dc3.jpg" alt='Montanha1'/>

            <hr />

{/*2º img via import como nome variável*/}
            <img 
            style={{
                width: 200,
                height: 120
            }}
            src={fotoMontanha}
            alt='Montanha2'
            />

            <hr />

{/*3º img via import um svg como componente do react*/}
            <IconCarrinho 
            style={{
                width: 30,
                height: 30
                }}/>

                <hr />

            <IconCarrinnhoMais
            style={{
                width: 30,
                height: 30,
                color: '#034f84'
                }} />

            <Discord
            style={{
                width: 30,
                height: 30,
                color: '#034f84'
                }}/>
            
                <hr/>

            <Ovin
            style={{
                width: 30,
                height: 30,
                color: '#3b3a30'
                }} />
        </Box>
    )
}

export default Sidebar