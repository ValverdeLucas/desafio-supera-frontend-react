import { Container, Text, Content } from "./UserEditStyles";
import { FaTimes } from "react-icons/fa";

interface Props {
    active: any;
}

const UserEdit = ({ active }: Props) => {

    const closeEditUser = () => {
        active(false)
    }

    return (
        <Container editUser={active}>
            <Content>
            <FaTimes onClick={closeEditUser} />
                <Text>Página de Editar Usuário</Text>
            </Content >

        </Container>
    )
}

export default UserEdit;
