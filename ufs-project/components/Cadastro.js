import { Container,Content,WelcomeText,InputContainer, ButtonContainer,LoginWith,HorizontalRule } from "./LoginStyle"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { StyledInput } from "./InputComponent";
import { StyledButton } from "./ButtonComponent";
import Upload from "./Upload/Upload";
import File from "./FileCadastro/FileCadastro";
import axios from "axios";

export default function Login() {
    const { register, handleSubmit } = useForm();

    const { singUp } = useContext(AuthContext)

    const [state,setState] = useState();

    const handleUpload = file => {
        setState({
            file,
            file:file[0],
            name:file[0].name,
            preview:URL.createObjectURL(file[0]),
            uploaded: false,
            error:false,
        })

    };

    async function handleSingUp(e){
        try {
            const formData = new FormData()
            formData.append("file",state.file)

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
              };

            const { data } = await axios.post('/api/up',formData, config);

            await singUp({
                ...e,
                ...data
            })

        } catch (error) {
            console.log(error)
        }
    }


      return(
        <Container>
            <Content>
                <WelcomeText>
                <h3>Bem Vindo ao</h3>
                <h3>Blog da UFS</h3>
                <h4>Cadastro</h4>
                </WelcomeText>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <InputContainer>
                    <StyledInput {...register("name")} type="text" placeholder="Name" />
                    </InputContainer>
                    <InputContainer>
                        <StyledInput {...register("password")} type="text" placeholder="Senha" />
                    </InputContainer>

                    <Upload onUpload={handleUpload}/>
                    { !!state &&  (<File files={state}/>)}
                    <ButtonContainer>
                        <StyledButton type="submit">
                            Entrar
                        </StyledButton >
                    </ButtonContainer>
                    <LoginWith>
                        <h4>Já tem uma conta?<Link href="/cadastro"><span>Logue aqui</span></Link></h4>
                    </LoginWith>
                </form>
            </Content>
        </Container>
    )
}