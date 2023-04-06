import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Contact from './pages/Contact'

const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    )
}

export default Router