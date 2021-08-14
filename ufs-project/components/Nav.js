import styled from "styled-components";



export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content:space-between;
    position: fixed;
    width:100%;
    top: 0px;
    justify-self: center;
    z-index: 200px;
    background-color: aliceblue;
    opacity: 0.7;
    height: 98px;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;

        li{
        padding: 10px 8px;
        cursor:pointer;

        :hover{
            color:red
        }
    }
    }

    p{
        font-size: 16px;
    }
`