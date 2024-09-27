import { BrowserRouter, Route, Routes } from "react-router-dom"
// import UserPage from "../Components/User/UserPage"
import UserCreatePage from "../Pages/UserCreate/UserCreatePage"
import UserListPage from "../Pages/UserList/UserListPage"
// import UserEditPage from "../Components/UserEdit/UserEditPage"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={< UserListPage />} />
                <Route path="user/create" element={< UserCreatePage />} />
                {/* <Route path="user" element={< UserPage />} />
                <Route path="user/edit" element={< UserEditPage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router