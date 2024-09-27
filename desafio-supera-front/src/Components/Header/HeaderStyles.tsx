import styled from "styled-components";

export const Text = styled.div`
    color: white;
    font-size: 3rem;
`

export const Container = styled.div`
display: flex;
height: 10vh;
gap: 42.5rem;
width: 100vw;
border-radius: 20px 20px 0 0;
padding: 30px;
align-items: center;
justify-content: flex-start;
background-color: #1A202C;

> svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
`