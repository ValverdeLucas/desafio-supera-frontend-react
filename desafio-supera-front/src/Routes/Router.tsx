import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserCreatePage from "../Pages/UserCreate/UserCreatePage"
import UserListPage from "../Pages/UserList/UserListPage"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={< UserListPage />} />
                <Route path="user/create" element={< UserCreatePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router