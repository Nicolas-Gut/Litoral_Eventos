import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Users from './pages/Users'

const Router = () => {
    return( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default Router