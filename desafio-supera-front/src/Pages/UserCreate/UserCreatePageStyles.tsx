import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 1rem;
width: 100vw;
align-items : center;
justify-content: center;
height: 80vh;
background-color: #000;
`

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
color: white;
flex-basis: 100%;
`
