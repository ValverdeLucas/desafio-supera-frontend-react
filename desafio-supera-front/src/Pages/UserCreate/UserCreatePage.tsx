import { Container, Form, FormInput, FormSelect, SelectOptions } from "./UserCreatePageStyles";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { maskPhoneNumber } from "../../Masks/Masks";
import { UserType } from "../../Global/Types/Types";
import api from "../../Services/Api";
import { BASE_URL } from "../../Constants/BASE_URL";

function UserCreatePage() {

    const [user, setUser] = useState<UserType>()
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm<UserType>();
    console.log(errors);
    const phoneValue = watch("telefone")

    useEffect(() => {
        setValue("telefone", maskPhoneNumber(phoneValue))
    }, [phoneValue])

    const createUser = async (userData: UserType) => {
        try {
            const response = await api.post(`${BASE_URL}/users`, userData);
            return response.data;
        } catch (error: any) {
            throw error.response.data
        }
    }

    const onSubmit = async (data: UserType) => {
        if (data && data !== user) {
            setIsLoading(true);
            setSuccessMessage('');
            setErrorMessage('');
            try {
                const result = await createUser(data);
                setUser(result)
                setSuccessMessage('Usuário criado com sucesso!')
            } catch (error: any) {
                setErrorMessage(error.message || 'Erro ao criar usuário')
            } finally {
                setIsLoading(false)
            }
        }
    }

    console.log(user)

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput type="text" placeholder="Nome" {...register("nome", { required: true, max: 100, min: 3 })} />
                {errors.nome && <p>O nome é obrigatório! &#40;Min caracteres: 3 / Max caracteres: 100&#41;</p>}

                <FormInput type="text" placeholder="E-mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>O e-mail é obrigatório!</p>}

                <FormSelect {...register("perfil", { required: true })}>
                    <SelectOptions value="">Selecionar perfil</SelectOptions>
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
        </Container>
    )
}

export default UserCreatePage;      
