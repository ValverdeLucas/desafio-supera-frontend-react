import { Container, Text, Content } from "./UserStyles";
import { FaTimes } from "react-icons/fa";

interface Props {
    active: any;
}

const User = ({ active }: Props) => {

    const closeUser = () => {
        active(false)
    }

    return (
        <Container showUser={active}>
            <Content>
                <FaTimes onClick={closeUser} />
                <Text>Página do Usuário Único</Text>
            </Content>
        </Container>
    );
};

export default User;
