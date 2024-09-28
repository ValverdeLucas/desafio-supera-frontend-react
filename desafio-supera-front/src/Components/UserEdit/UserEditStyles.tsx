import styled from "styled-components";

interface Props {
    editUser: any;
}

export const Container = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);   
`

export const Content = styled.div`
position: absolute;
display: flex;
padding: 1rem;
justify-content: center;
right: 25%;
border-radius: 30px;
top: 10%;
width: 50vw;
height: 80vh;
background-color: #fff  ;

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

export const Form = styled.form`
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
padding: 1rem;
width: 50vw;
/* overflow: scroll; */
height: 75vh;
background-color: #fff;
`

export const FormInput = styled.input`
    width: 85%;
    height: 3rem;
    color:  red;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const FormSelect = styled.select`
    width: 85%;
    height: 3rem;
    color:  red;
`

export const SelectOptions = styled.option`
        width: 85%;
    height: 3rem;
    color:  red;
`

export const Text = styled.h1`
color: red;
`;