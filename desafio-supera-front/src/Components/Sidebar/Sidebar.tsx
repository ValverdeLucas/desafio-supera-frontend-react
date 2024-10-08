import { Button, Container, Content } from "./SidebarStyles";
import { useNavigate } from "react-router-dom"
import { goToUserList, goToCreateUser } from "../../Routes/Coordinator"
import { FaTimes } from "react-icons/fa";

interface Props {
    active: any;
}

const Sidebar = ({ active }: Props) => {

    const closeSidebar = () => {
        active(false)
    }

    const navegar = useNavigate();

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <Button onClick={() => goToUserList(navegar)}>Lista de Usuários</Button>,
                <Button onClick={() => goToCreateUser(navegar)}>Criar Usuário</Button>,
            </Content>
        </Container>
    )

}

export default Sidebar;