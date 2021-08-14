import { Container,Content,WelcomeText,InputContainer, ButtonContainer,LoginWith,HorizontalRule } from "./LoginStyle"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { StyledInput } from "./InputComponent";
import { StyledButton } from "./ButtonComponent";

export default function Login() {
    const { register, handleSubmit } = useForm();

    const { singIn } = useContext(AuthContext)

    async function handleSingIn(data){
        try {
            await singIn({...data})
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Container>
            <Content>
                <WelcomeText>
                <h3>Blog da UFS</h3>
                <h2>Bem Vindo</h2>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSingIn)}>
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" />;
                    </InputContainer>

                    <InputContainer>
                        <StyledInput {...register("password")} type="text" placeholder="Senha" />;
                    </InputContainer>
                    <ButtonContainer>
                        <StyledButton type="submit">
                            Entrar
                        </StyledButton >
                    </ButtonContainer>
                    <LoginWith>
                        <h4>Não tem uma conta?<Link href="/cadastro"><span>Se cadaste aqui</span></Link></h4>
                    </LoginWith>
                </form>
            </Content>
        </Container>
    )
}