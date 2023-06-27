import './Header.css'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'; // Importe a função Link para criar links internos

import MainMenu from './MainMenu'
import useAuthStore from '../store/authStore'
import { useState } from 'react'
import { API_SERVER } from '../config'
// eslint-disable-next-line
// import Home from '../pages/Home.js'
import logo from '../components/assets/img/Litoral_EventosO.png'
import modalImage from '../components/assets/img/imgM.png'

const Header = () => {

    const isLogged = useAuthStore((state) => state.isLogged)
    const avatarUserLogged = useAuthStore((state) => state.avatar)
    const nameUserLogged = useAuthStore((state) => state.name)
    const emailUserLogged = useAuthStore((state) => state.email)
    const tokenUserLogged = useAuthStore((state) => state.token)
    const login = useAuthStore((state) => state.login)
    const logout = useAuthStore((state) => state.logout)

    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault() 
        const email = event.target.email.value
        const pass = event.target.pass.value
        const user = {email, pass}
        try {
          const response = await fetch(`${API_SERVER}/auth/login`,
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user), 
          })
          const data = await response.json()
          
          console.log(data)
          if(response.status === 200) {
            //logar
            login(data.token, data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            setModalOpen(false)
          } else{
            alert(data.message)
          }
          
        } catch (error) {
          console.log(error)
        }
      }

      const handleLogout = async () => {
        try {
          const response = await fetch(`${API_SERVER}/auth/logout`,
          {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: emailUserLogged, token: tokenUserLogged}), 
          })
          const data = await response.json()
          console.log(data)
          if(response.status === 200) {
            logout()
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          } else{
            alert(data.message)
          }
          
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <Box component='header' sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={styles.stack}>
              <Link to="http://localhost:3000/">
                <img src={logo} alt="Slide 1" />
              </Link>
            </Box>
            
            <MainMenu />

            <div style={{margin: '0 0 0 20px', color: '#FFF' }}>
                {isLogged ? (
                    <img onClick={() => handleLogout()} style={styles.avatar} src={avatarUserLogged} alt={nameUserLogged} />
                ) : (<button  onClick={() => setModalOpen(true)}>Logar</button>) }
            </div>
            
            {modalOpen && 
              <Box className="bgModal" onClick={(event) => {
                if(event.target.className.includes('bgModal')) {
                  setModalOpen(false)
                }
              }} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#000000A0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9
                }}>
                  <Box sx={{
                    width: '500px',
                    height: '300px',
                    background: '#FFF',
                    borderRadius: '10px',
                    padding: '20px',
                  }}>

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <img src={modalImage} alt='imagem/modal' className="modal-image" />
                    </Box>

                    <form className='modal-form' onSubmit={handleSubmit}>
                      <h1 className='modal-title' style={{ color: 'black', marginBottom: '10px' }}>Login</h1>
                      <input type="text" name="email" placeholder="Email" /><br />
                      <input type="password" name="pass" placeholder="Senha" /><br />
                      <br />
                      <button className="login-button" style={styles.loginButton} type="submit">Logar</button>
                    </form>
                  </Box> 
              </Box>
            }
      </Box>
    )
}

const styles = {
    stack: {
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        gap: '10px',
        width: 'fit-content'
    },
    logo: {
        color: '#FFF',
        width: '40px',
        height: '40px'
    },
    avatar: {
        width: '40px',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    loginButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '30px',
        margin: '0 auto',
      },
    
}

export default Header

