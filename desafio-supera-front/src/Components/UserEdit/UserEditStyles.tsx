import styled from "styled-components";

interface Props {
    editUser: any;
}

export const Container = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);   
`

export const Content = styled.div`
position: absolute;
display: flex;
flex-direction: column;
padding: 1rem;
justify-content: center;
align-items: center;
border-radius: 30px;
top: 10%;
width: 40vw;
height: 80vh;
background-color: #fff  ;

>svg {
    position: absolute;
        color: #16697A;
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
align-items: center;
gap: 1rem;
padding: 0 1rem;
height: 100%;
width: 40vw;
background-color: #fff;
`

export const FormInput = styled.input`
    width: 80%;
    height: 4rem;
    font-size: 1.5rem;
    border-radius: 30px;
    padding: 0 1rem;
    border: 1px solid #16697A;

    &#submit-button-edit {
        background-color: #16697A;
        width: 50%;
        color: white;
        cursor: pointer;
        transition: .5s;
    }

    &#submit-button-edit:hover {
        background-color: #FFA62B;
        color: white;
    }

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

}
`

export const FormSelect = styled.select`
    width: 80%;
    height: 3rem;
    height: 4rem;
    padding: 0 1rem;
    border: 1px solid #16697A;
    font-size: 1.5rem;
    border-radius: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
`

export const SelectOptions = styled.option`
    width: 80%;
    height: 4rem;
`

export const Text = styled.h1`
color: #16697A;
`;