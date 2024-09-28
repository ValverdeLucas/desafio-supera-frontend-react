import { Container, Form, FormInput, FormSelect, SelectOptions } from "./UserCreatePageStyles";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { maskPhoneNumber } from "../../Masks/Masks";
import { UserType } from "../../Global/Types/Types";
import api from "../../Services/Api";
import { BASE_URL } from "../../Constants/BASE_URL";
import { goToUserList } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalState } from "../../Global/GlobalState";
import { useToast } from "../../Global/ToastContext";

function UserCreatePage() {

    const [user, setUser] = useState<UserType | null>(null)
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm<UserType>();
    console.log(errors);
    const navegar = useNavigate();
    const phoneValue = watch("telefone")
    const { notify } = useToast();

    useEffect(() => {
        setValue("telefone", maskPhoneNumber(phoneValue) || null)
    }, [phoneValue])

    const { updateUsers } = useGlobalState();

    const createUser = async (userData: UserType) => {
        try {
            const response = await api.post(`${BASE_URL}/users`, userData);
            return response.data;
        } catch (error: any) {
            throw error.response.data
        }
    }

    const onSubmit = async (userData: UserType) => {
        if (!userData || Object.keys(userData).length === 0) {
            notify('Dados inválidos!', 'warning');
            return;
        }

        const formattedData = {
            ...userData,
            telefone: userData.telefone || null,
            idade: userData.idade || null,
        };

        setIsLoading(true);

        try {
            console.log(userData)
            const result = await createUser(formattedData);
            setUser(result)
            notify('Usuário criado com sucesso! Você será redirecionado!', 'success');
            setTimeout(() => {
                updateUsers();
                goToUserList(navegar);
            }, 2500);

        } catch (error: any) {
            notify('Erro ao criar usuário!', 'error');
        } finally {
            setIsLoading(false)

        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput type="text" placeholder="Nome (obrigatório)" {...register("nome", { required: true, max: 100, min: 3 })} />
                {errors.nome && <p>O nome é inválido! &#40;Min caracteres: 3 / Max caracteres: 100&#41;</p>}

                <FormInput type="text" placeholder="E-mail (obrigatório)" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>O e-mail é inválido!</p>}

                <FormSelect {...register("perfil", { required: true })}>
                    <SelectOptions value="">Selecionar perfil (obrigatório)</SelectOptions>
                    <SelectOptions value="USER">Usuário</SelectOptions>
                    <SelectOptions value="ADMIN">Administrador</SelectOptions>
                </FormSelect>
                {errors.perfil && <p>O perfil é obrigatório</p>}

                <FormInput type="tel" placeholder="Telefone"     {...register("telefone", {})} />
                {errors.telefone && <p>O padrão precisa ser: &#40;xx&#41; 9xxxx-xxxx</p>}

                <FormInput type="number" placeholder="Idade" {...register("idade", { min: 0 })} />
                {errors.idade && <p>A idade não pode ser menor do que 0!</p>}

                <FormInput type="submit" value="Submit" />
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </Form>
            <ToastContainer limit={3} />
        </Container>

    )
}

export default UserCreatePage;      
