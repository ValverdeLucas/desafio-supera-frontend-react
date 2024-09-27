import styled from "styled-components";
import { FaPen, FaUser } from "react-icons/fa";

export const ColunaTable = styled.th`
    width: 15%;
    background-color: #fff;
    color: red;
`

export const LinhaTable = styled.tr`
    background-color: #fff;
    &:hover {
    transition: .5s;
}
`

export const ButtonDiv = styled.div`
    display: flex ;
    gap: 3rem;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const EditButton = styled(FaPen)`
color: red;
width: 2rem;
height: 2rem;
cursor: pointer;

&:hover {
    transition: .5s;
    color: white;
}
    
`

export const ShowUserButton = styled(FaUser)`
color: red;
width: 2rem;
height: 2rem;
cursor: pointer;    

&:hover {
    transition: .5s;
    color: white;
}`