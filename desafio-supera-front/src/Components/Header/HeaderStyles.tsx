import styled from "styled-components";

export const Text = styled.div`
    color: white;
    font-size: 3rem;
`

export const HeaderDiv = styled.div`
    display: flex;

> svg {
    position: absolute;
    left: 2rem;
    top: 2rem;
    color: #EDE7E3;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
`

export const Container = styled.div`
display: flex;
height: 10vh;
gap: 42.5rem;
width: 100vw;
border-radius: 20px 20px 0 0;
padding: 30px;
align-items: center;
justify-content: center;
background-color: #16697A;
`