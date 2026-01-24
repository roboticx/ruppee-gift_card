import { Route, Routes } from 'react-router-dom'
import Home from '../(main)/Home/Home'
import RootLayout from '../layouts/RootLayout'
import AuthLayout from '../layouts/AuthLayout'
import CardDetails from '../Components/CardDetails'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/card-details'} element={<CardDetails />} />
            </Route>
            <Route element={<AuthLayout />}>
                {/* <Route path="/login" element={<Login />} /> */}
            </Route>
        </Routes>
    )
}

export default AppRoutes