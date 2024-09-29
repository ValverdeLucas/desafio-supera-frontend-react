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
    justify-content: space-between;

`

export const ButtonWrapper = styled.div`
 width: 15%;
    >button {
        text-decoration: none;
        height: 5vh;
        width: 50%;
        font-size: 1rem;
        border: 1px solid transparent;
        cursor: pointer;
    }

    #button-aplicar {
        border-radius: 30px 0 0 30px;
        background-color: #16697A;
        color: #EDE7E3;
    }

    #button-aplicar:hover {
        background-color: #FFA62B;
        transition: .5s;
    }

    #button-limpar {
        border-radius: 0 30px 30px 0;
        background-color: #16697A;
        color: white;
    }

    #button-limpar:hover {
        border-radius: 0 30px 30px 0;
        background-color: #FFA62B;
        transition: .5s;
    }
    
`

export const FilterWrapper = styled.div`
    width: 82.5%;
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
        background-color: #16697A;
        color: #EDE7E3;
        height: 5vh;
        cursor: pointer;
        padding: 0 .5rem;
        border-radius: 0 30px 30px 0;
        border: 1px transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
`

export const Table = styled.table`
    height: 65vh;
    width: 90vw;
    border-radius: 0px 0px 30px 30px;
    background-color: #EDE7E3;
`

export const ColunaTable = styled.th`
    width: 10%;
    border-radius: 0px 0px 30px 30px;
    background-color: #16697A;
    color: #EDE7E3;
    font-size: 1.75rem;
`


export const LinhaTable = styled.tr`
    border-radius: 30px;
    height: 15%;
`