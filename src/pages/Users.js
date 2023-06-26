import Box from '@mui/material/Box'
import Header from '../components/Header'
// import Content from '../components/Content'
// import Videos from '../components/Videos'
import Footer from '../components/Footer'
import { useState } from 'react'
import './User.css'
import { API_SERVER } from '../config'

import imageB from '../components/assets/img/imageB.png';



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

      <Box
        sx={{
          display: 'flex',
          backgroundImage: `url(${imageB})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '774px', // Adjust the desired height for the background image
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
          padding: '20px',
        }}
      >
        {/* <img src={imageB} alt="image" /> */}
        <h1 style={{color: '#fff'}}>Produza eventos e conteúdos.</h1>
        <p style={{color: '#fff'}}>Junte-se à maior plataforma do lITORAL para criar diferentes jeitos de viver, com soluções completa gestão, venda e entrega das suas produções</p>
        <button className="btn-cadastrar" onClick={() => setModalOpen(true)}>
          Cadastrar User
        </button>
      </Box>

      {/* <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <button className="btn-cadastrar" onClick={() => setModalOpen(true)}>
          Cadastrar User
        </button>
      </Box> */}

      {/* <Videos /> */}

      {modalOpen && (
        <Box
          className="modal-container"
          onClick={(event) => {
            if (event.target.className.includes('modal-container')) {
              setModalOpen(false);
            }
          }}
        >
          <Box className="modal-content">
            <h1 className="modal-title">Cadastrar User</h1>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nome" />
              <br />
              <input type="text" name="email" placeholder="Email" />
              <br />
              <input type="password" name="pass" placeholder="Senha" />
              <br />
              <input type="text" name="avatar" placeholder="Avatar" />
              <br />
              <br />
              <button type="submit">Cadastrar</button>
            </form>
          </Box>
        </Box>
      )}

      <Footer />
    </>
  );
};

export default Users;