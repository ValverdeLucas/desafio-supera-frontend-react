import React from 'react';
import { Container, Content, Text, Form, FormInput } from './UserStyles';
import { FaTimes } from 'react-icons/fa';

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

    return (
        <Container showUser={active}>
            <Content>
                <FaTimes onClick={closeUser} />
                <Text>Perfil do Usuário</Text>
                <Text>{user.nome} - ID {user.id}</Text>
                <Form>
                    <FormInput type="text" placeholder="Nome" value={user.nome} disabled/>
                    <FormInput type="text" placeholder="E-mail" value={user.email} disabled/>
                    <FormInput type="text" placeholder="Perfil" value={user.perfil} disabled/>
                    <FormInput type="tel" placeholder="Telefone" value={user.telefone} disabled/>
                    <FormInput type="number" placeholder="Idade" value={user.idade} disabled/>
                </Form>
            </Content>
        </Container>
    );
};

export default User;
