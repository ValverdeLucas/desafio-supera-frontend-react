import { Container, Text, Content, Form, FormInput, FormSelect, SelectOptions } from "./UserEditStyles";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { maskPhoneNumber } from "../../Masks/Masks";
import { UserType } from "../../Global/Types/Types";
import api from "../../Services/Api";
import { BASE_URL } from "../../Constants/BASE_URL";
import { useGlobalState } from "../../Global/GlobalState";
import { useToast } from "../../Global/ToastContext";

interface Props {
    active: any;
    userId: any;
}

const useFetchUser = (userId: string) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`${BASE_URL}/users/${userId}`);
                setUser(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId]);

    return { user, loading };
};

const UserEdit = ({ active, userId }: Props) => {

    const { updateUsers } = useGlobalState();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm<UserType>();
    console.log(errors);
    const phoneValue = watch("telefone");
    const { notify } = useToast();


    const closeEditUser = () => {
        active(false)
    }

    useEffect(() => {
        setValue("telefone", maskPhoneNumber(phoneValue))
    }, [phoneValue])

    const { user, loading } = useFetchUser(userId);

    useEffect(() => {
        if (loading) return;

        if (user) {
            setValue("nome", user.nome || "");
            setValue("email", user.email || "");
            setValue("perfil", user.perfil || "");
            setValue("telefone", maskPhoneNumber(user.telefone || null));
            setValue("idade", user.idade || null);
        }
    }, [loading, user, userId, setValue, maskPhoneNumber]);

    const editUser = async (userData: any) => {
        try {
            const response = await api.put(`${BASE_URL}/users/${userId}`, userData);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    };

    const onSubmit = async (data: UserType) => {
        if (!user) return;

        setIsLoading(true);

        try {
            const result = await editUser(data);
            notify('Usuário alterado com sucesso!', 'success');
            updateUsers();
            closeEditUser();
        } catch (error: any) {
            notify('Erro ao editar usuário!', 'error');
        } finally {
            setIsLoading(false)

        }
    }

    return (
        <Container editUser={active}>
            <Content>
                <FaTimes onClick={closeEditUser} />
                <Text>Edição de Usuário</Text>
                <Text>{user?.nome} - ID {user?.id}</Text>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput type="text" placeholder="Nome" {...register("nome", { required: true, maxLength: 100, minLength: 3 })} />
                    {errors.nome && <p>O nome é obrigatório! &#40;Min caracteres: 3 / Max caracteres: 100&#41;</p>}

                    <FormInput type="text" placeholder="E-mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p>O e-mail é obrigatório!</p>}

                    <FormSelect {...register("perfil", { required: true })}>
                        <SelectOptions value="">Selecionar perfil</SelectOptions>
                        <SelectOptions value="USER">Usuário</SelectOptions>
                        <SelectOptions value="ADMIN">Administrador</SelectOptions>
                    </FormSelect>
                    {errors.perfil && <p>O perfil é obrigatório</p>}

                    <FormInput type="tel" placeholder="Telefone"     {...register("telefone", { pattern: /^\\([1-9]{2}\\) 9[0-9]{4}\-[0-9]{4}$/ })} onBlur={(e) => console.log("Value changed:", e.target.value)}/>
                    {errors.telefone && <p>O padrão precisa ser: &#40;xx&#41; 9xxxx-xxxx</p>}

                    <FormInput type="number" placeholder="Idade" {...register("idade", { min: 0 })} />
                    {errors.idade && <p>A idade não pode ser menor do que 0!</p>}

                    <FormInput type="submit" value="Submit" id="submit-button-edit" />
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </Form>
            </Content >

        </Container>
    )
}

export default UserEdit;
function setUser(newUserData: UserType): any {
    throw new Error("Function not implemented.");
}

