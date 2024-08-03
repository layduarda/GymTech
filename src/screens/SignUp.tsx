import { VStack, Heading, Center } from "native-base";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm, Controller } from "react-hook-form";

import * as yup from "yup";
import {  yupResolver } from "@hookform/resolvers/yup";

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

const SignUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe a senha').min(6,'A senha deve conter no mínimo 6 dígitos'),
    password_confirm: yup.string()
    .required('Informe a confirmação da senha')
    .oneOf([yup.ref('password'), null], 'A confirmação de senha não é válida')
});

export function SignUp() {

    const { control, handleSubmit, formState: {errors } } = useForm<FormDataProps>()
    function handleSignUp(data: FormDataProps) {
        console.log(data);
    }

    return (
    <VStack bgColor="gray.400" flex='1' paddingX={10}>
        <Center>
            <Heading my={24}>
                Crie sua conta
            </Heading>

        <Controller 
            control={control}
            name="name"
            render={({ field: {onChange}}) => (
                <Input 
                placeholder="Nome" 
                onChangeText={onChange} 
                errorMessage={errors.name?.message}
                />
            )}
        />

        <Controller 
            control={control}
            name="email"
            render={({ field: {onChange}}) => (
                <Input 
                placeholder="Email" 
                onChangeText={onChange} 
                errorMessage={errors.email?.message}
                />
            )}
        />

        <Controller 
            control={control}
            name="password"
            render={({ field: {onChange}}) => (
                <Input 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={onChange} 
                errorMessage={errors.password?.message}
                />
            )}
        />

        <Controller 
            control={control}
            name="password_confirm"
            render={({ field: {onChange}}) => (
                <Input placeholder="Confirme a senha" 
                secureTextEntry
                onChangeText={onChange} 
                errorMessage={errors.password_confirm?.message}
                />
            )}
        />


            <Button onPress={handleSubmit(handleSignUp)}/>
        </Center>
        </VStack>
    );
}