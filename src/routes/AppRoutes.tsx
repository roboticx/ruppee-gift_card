import { Route, Routes } from 'react-router-dom'
import Home from '../(main)/Home/Home'
import RootLayout from '../layouts/RootLayout'
import AuthLayout from '../layouts/AuthLayout'
import StoreList from '../(main)/StoreList/StoreList'
import Cart from '../(main)/Cart'
import Checkout from '../(main)/Checkout'
import Failed from '../(main)/Failed'
import StoreDetail from '../(main)/StoreDetails/StoreDetail'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/card-details'} element={<StoreDetail />} />
                <Route path={'/store-list/:categoryId'} element={<StoreList />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
            
            <Route element={<AuthLayout />}>
                <Route path={'/checkout'} element={<Checkout />} />
                <Route path={'/failed'} element={<Failed />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes