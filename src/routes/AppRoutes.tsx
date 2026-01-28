import { Route, Routes } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import AuthLayout from '../layouts/AuthLayout'
import UserList from '../(main)/AdminPanel/UserList/UserList'
import Cart from '../(main)/Guest/Cart'
import Failed from '../(main)/User/Failed'
import Home from '../(main)/Guest/Home/Home'
import StoreDetail from '../(main)/Guest/StoreDetails/StoreDetail'
import StoreList from '../(main)/Guest/StoreList/StoreList'
import ThankYou from '../(main)/User/ThankYou'
import AdminLayout from '../layouts/AdminLayout'
import Exclusive from '../(main)/Guest/Home/Exclusive'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/card-details'} element={<StoreDetail />} />
                <Route path={'/store-list/:categoryId'} element={<StoreList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/overview" element={<UserList />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path={'/thank-you'} element={<ThankYou />} />
                <Route path={'/failed'} element={<Failed />} />
            </Route>

            <Route element={<AdminLayout />}>
                <Route path={'/admin'} element={<Exclusive />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes