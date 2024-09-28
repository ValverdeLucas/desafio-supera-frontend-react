import React from 'react';
import { Container, Content, Text, FormData, Label, Value } from './UserStyles';
import { FaTimes } from 'react-icons/fa';
import { Perfil, UserType } from '../../Global/Types/Types';

interface Props {
    active: (show: boolean) => void;
    user: any | null;
}

const User: React.FC<Props> = ({ active, user }) => {
    const [formData, setFormData] = React.useState<any>({
        id: '',
        nome: '',
        email: '',
        perfil: '',
        telefone: '',
        idade: ''
    });

    React.useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({
                id: '',
                nome: '',
                email: '',
                perfil: '',
                telefone: '',
                idade: ''
            });
        }
    }, [user]);
    const closeUser = () => {
        active(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container showUser={active}>
            <Content>
                <FaTimes onClick={closeUser} />
                <div>
                    <Text>Página do Usuário Único</Text>
                    <FormData>
                        <div>
                            <Label>ID:</Label>
                            <Value>{user.id}</Value>
                        </div>
                        <div>
                            <Label>Nome:</Label>
                            <Value>{user.nome}</Value>
                        </div>

                        <div>
                            <Label>Email:</Label>
                            <Value>{user.email}</Value>
                        </div>

                        <div>
                            <Label>Perfil:</Label>
                            <Value>{user.perfil}</Value>
                        </div>

                        <div>
                            <Label>Telefone:</Label>
                            <Value>{user.telefone}</Value>
                        </div>

                        <div>
                            <Label>Idade:</Label>
                            <Value>{user.idade}</Value>
                        </div>
                    </FormData>
                </div>
            </Content>
        </Container>
    );
};

export default User;
