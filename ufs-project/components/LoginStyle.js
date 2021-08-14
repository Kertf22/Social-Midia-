import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
`
export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h4`

  font-size: 10px;
  font-weight: 450;
  letter-spacing:normal;
  cursor: pointer;
  span{
    margin-left: 5px;
    color:#848482;
    cursor: pointer;
}
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin: 4px;
    border-radius: 25px;

    input{
        width: 280px;
        height: 42px;
        font-size: 18px;
        border-radius: 8px;
        outline: none;
        border: 0.5px solid black;
    }
    span{
        font-size: 16px;
        margin-bottom: 8px;
    }
`
export const Submit = styled.button`
    margin-top: 16px;
    width: 160px;
    height: 24px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;

    :hover{
        background-color: aqua;
        transition: 1s ease-in-out;
    }
`