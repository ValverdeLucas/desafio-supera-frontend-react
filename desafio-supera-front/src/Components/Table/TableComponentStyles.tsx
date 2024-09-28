import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
`

export const InputWrapper = styled.div`
    width: 90vw;
    display: flex;

    >input{
        width: 90%;
        height: 5vh;
        border-radius: 30px 0 0 30px;
        font-size: 1.5rem;
        padding: 1rem;
    }

    >select{
        width: 10%;
        font-size: 1.5rem;
        height: 5vh;
        border-radius: 0 30px 30px 0;
    }


`

export const Table = styled.table`
    height: 65vh;
    width: 90vw;
    border-radius: 30px;
    background-color: #fff;
`

export const ColunaTable = styled.th`
    width: 10%;
    border-radius: 30px;
    background-color: transparent;
    font-size: 1.75rem;
`


export const LinhaTable = styled.tr`
    border-radius: 30px;
    height: 15%;
    background-color: #fff;
`