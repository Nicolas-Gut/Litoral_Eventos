import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Users from './pages/Users'
import Perfil from './pages/Perfil'

const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/perfil" element={<Perfil />}/>
        </Routes>
    )
}

export default Router