import styled from "styled-components";

interface Props {
    showUser: any;
}

export const Container = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const FormData = styled.form`
display: flex;
flex-direction: column;
>div{
    display: flex;
}

`

export const Label = styled.span``
export const Value = styled.p``


export const Content = styled.div`
position: absolute;
right: 25%;
border-radius: 30px;
display: flex;
padding: 1rem;
justify-content: center;
top: 10%;
width: 50vw;
height: 80vh;
background-color: #fff;

>svg {
    position: absolute;
        color: red;
        width: 30px;
        height: 30px;
        top:20px;
        right: 20px;
        cursor: pointer;
}

`;

export const Text = styled.h1`
color: red;
`;