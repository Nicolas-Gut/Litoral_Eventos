import Box from '@mui/material/Box'
import Header from '../components/Header'
import Content from '../components/Content'
import Videos from '../components/Videos'
// import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'

import { API_SERVER } from '../config'

const Users = () => {
  
  // const [users, setUsers] = useState(false)
  const [modalOpen, setModalOpen] = useState(false) 

  // const loadUsers = async () => {
  //   try {
  //     const response = await fetch()
  //     const data = await response.json()
  //     setUsers(data)
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   loadUsers()
  // }, []) // [] = executa apenas uma vez quando o componente é montado

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Minha funcao de submit')
    console.log(event.target)
    const name = event.target.name.value 
    const email = event.target.email.value
    const pass = event.target.pass.value
    const avatar = event.target.avatar.value
    const user = {name, email, pass, avatar}
    console.log(user)
    try {
      const response = await fetch(`${API_SERVER}/user`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      })
      const data = await response.json()
      if(response.status === 500 && data?.message){
        alert(data.message)
      }
      setModalOpen(false)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header />
    
     <Videos />
     
      <Box sx={{
        display: 'flex',
      }}>

        <Content title="Users">
            <button onClick={() => setModalOpen(true)}>Cadastrar User</button>
            
        </Content>
      </Box>
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
                    width: '600px',
                    height: '400px',
                    background: '#FFF',
                    borderRadius: '4px',
                    padding: '20px',
                  }}>
                    <h1>Cadastrar User</h1>
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="name" placeholder="Nome" /><br />
                      <input type="text" name="email" placeholder="Email" /><br />
                      <input type="password" name="pass" placeholder="Senha" /><br />
                      <input type="text" name="avatar" placeholder="Avatar" /><br />
                      <br />
                      <button type="submit">Cadastrar</button>
                    </form>
                  </Box> 
              </Box>
            }
      
      <Footer />
    </>
  )
}

export default Users