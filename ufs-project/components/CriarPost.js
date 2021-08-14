import { InputContainer, LoginWith, Container,Content, WelcomeText } from "./LoginStyle"

import Link from "next/link"
import { StyledInput } from "./InputComponent"


export default function CriarPost(){
    return(
        <Container>
            <Content>
                <WelcomeText>
                    <h4>Criação de Post</h4>
                </WelcomeText>
                <div>
                    <form>
                        <InputContainer>
                            <StyledInput type="text" placeholder="Título"/>
                        </InputContainer>
                        <InputContainer>
                        <StyledInput type="text" placeholder="Descrição"/>
                        </InputContainer>
                        <InputContainer>
                        <StyledInput type="file" placeholder="Descrição"/>
                        </InputContainer>
                        <LoginWith>
                            <Link href="/lobby"><p>Volte aos post</p></Link>
                        </LoginWith>
                    </form>
                </div>
            </Content>
        </Container>
    )
}