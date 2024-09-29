import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 1rem;
width: 100vw;
align-items : center;
justify-content: center;
height: 80vh;
background-color: #82C0CC;
`

export const Form = styled.form`
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
padding: 1rem;
width: 40vw;
height: 60vh;
background-color: #EDE7E3;
`

export const FormInput = styled.input`
    width: 90%;
    height: 4rem;
    font-size: 1.5rem;
    border-radius: 30px;
    color: #000;
    padding: 0 1rem;
    border: 1px solid #16697A;

    &#submit-button-create {
        background-color: #16697A;
        width: 50%;
        color: white;
        cursor: pointer;
        transition: .5s;
    }
    
    &#submit-button-create:hover {
        background-color: #FFA62B;
        color: white;
    }

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const FormSelect = styled.select`
    width: 90%;
    height: 4rem;
    border-radius: 30px;
    padding: 0 1rem;
    font-size: 1.5rem;
    color:  #000;
    border: 1px solid #16697A;
    -webkit-appearance: none;
    -moz-appearance: none;
`

export const SelectOptions = styled.option`
    height: 3rem;
    color: #000;
`

export const Text = styled.h1`
color: white;
flex-basis: 100%;
`
