import { Container, Text } from "./HeaderStyles"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar"
import { useLocation } from "react-router-dom"

function Header() {

    const [sidebar, setSidebar] = useState(false);
    const mostrarSidebar = () => setSidebar(!sidebar)
    const pagina = useLocation();

    switch (pagina.pathname) {
        case "/":
            return (
                <Container>
                    <FaBars onClick={mostrarSidebar} />
                    <Text>Lista de Usuários</Text>
                    {sidebar && <Sidebar active={setSidebar} />}
                </Container>);
        case "/user/create":
            return (
                <Container>
                    <FaBars onClick={mostrarSidebar} />
                    <Text>Criação de Usuário</Text>
                    {sidebar && <Sidebar active={setSidebar} />}
                </Container>);
        default:
            return (
                <Container>
                    <FaBars onClick={mostrarSidebar} />
                    <Text>Lista de Usuários</Text>
                    {sidebar && <Sidebar active={setSidebar} />}
                </Container>);

    }
}

export default Header;
