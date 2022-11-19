import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    )
}