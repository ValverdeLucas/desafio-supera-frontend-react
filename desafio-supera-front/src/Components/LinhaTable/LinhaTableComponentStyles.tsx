import styled from "styled-components";
import { FaPen, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export const ColunaTable = styled.th`
    width: 10%;
    background-color: transparent;
    border-radius: 30px;
    color: red;
`

export const LinhaTable = styled.tr`
    height: 12.5%;
    background-color: transparent;
    &:hover {
    transition: .5s;
}
`

export const ButtonDiv = styled.div`
    display: flex ;

    gap: 1rem;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
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

export const DeleteUserButton = styled(MdDelete)`
color: red;
width: 2.5rem;
height: 2.5rem;
cursor: pointer;    

&:hover {
    transition: .5s;
    color: white;
}`