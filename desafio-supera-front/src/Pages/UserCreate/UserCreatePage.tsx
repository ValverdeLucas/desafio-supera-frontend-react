import { Container, Form, FormInput, FormSelect, SelectOptions } from "./UserCreatePageStyles";
import { useForm } from "react-hook-form"
import { useMask } from "@react-input/mask";


function UserCreatePage() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const inputRef = useMask({ mask: '(__) _____-____', replacement: { _: /\d/ } });

    return (
        <Container>
            <Form onSubmit={handleSubmit((data) => console.log(data))}>
                <FormInput type="text" placeholder="Nome" {...register("Nome", { required: true, max: 100, min: 3 })} />
                {errors.Nome && <p>O nome é obrigatório! &#40;Min caracteres: 3 / Max caracteres: 100&#41;</p>}

                <FormInput type="text" placeholder="E-mail" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.Email && <p>O e-mail é obrigatório!</p>}

                <FormSelect {...register("Perfil", { required: true })}>
                    <SelectOptions value="">Selecionar perfil</SelectOptions>
                    <SelectOptions value="Usuário Comum">Usuário Comum</SelectOptions>
                    <SelectOptions value="Administrador">Administrador</SelectOptions>
                </FormSelect>
                {errors.Perfil && <p>O perfil é obrigatório</p>}

                <FormInput type="tel" placeholder="Telefone" ref={inputRef} />
                {errors.Telefone && <p>O padrão precisa ser: &#40;xx&#41; 9xxxx-xxxx</p>}

                <FormInput type="number" placeholder="Idade" {...register("Idade", { min: 0 })} />
                {errors.Idade && <p>A idade não pode ser menor do que 0!</p>}
                
                <FormInput type="submit" value="Submit" />
            </Form>
        </Container>
    )
}

export default UserCreatePage;      
