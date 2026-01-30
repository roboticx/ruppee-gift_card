import { Route, Routes } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import AuthLayout from '../layouts/AuthLayout'
import Cart from '../(main)/Guest/Cart'
import Failed from '../(main)/User/Failed'
import Home from '../(main)/Guest/Home/Home'
import StoreDetail from '../(main)/Guest/StoreDetails/StoreDetail'
import StoreList from '../(main)/Guest/StoreList/StoreList'
import ThankYou from '../(main)/User/ThankYou'
import AdminLayout from '../layouts/AdminLayout'
import ProductsList from '../(main)/AdminPanel/Products/ProductsList'
import Categories from '../(main)/AdminPanel/Categories/Categories'
import EditCategory from '../(main)/AdminPanel/Categories/EditCategory'
import Orders from '../(main)/AdminPanel/Orders/Orders'
import Overview from '../(main)/AdminPanel/Overview/Overview'
import Analytics from '../(main)/AdminPanel/Analytics/Analytics'
import UserList from '../(main)/AdminPanel/Users/UserList'

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
                <Route path={'/thank-you'} element={<ThankYou />} />
                <Route path={'/failed'} element={<Failed />} />
            </Route>

            <Route element={<AdminLayout />}>
                <Route path="/overview" element={<Overview />} />
                <Route path="/products-list" element={<ProductsList />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/edit-category/:id" element={<EditCategory />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/analytics" element={<Analytics />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes