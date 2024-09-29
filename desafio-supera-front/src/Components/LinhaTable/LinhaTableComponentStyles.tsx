import styled from "styled-components";
import { FaPen, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export const ColunaTable = styled.th`
    width: 10%;
    background-color: transparent;
    border-radius: 30px;
    color: #000;
    font-size: 1.25rem;
`

export const LinhaTable = styled.tr`
    height: 15%;
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
color: #16697A;
width: 2rem;
height: 2rem;
cursor: pointer;

&:hover {
    transition: .5s;
    color: #489FB5;
}
    
`

export const ShowUserButton = styled(FaUser)`
color: #16697A;
width: 2rem;
height: 2rem;
cursor: pointer;    

&:hover {
    transition: .5s;
    color: #489FB5;
}`

export const DeleteUserButton = styled(MdDelete)`
color: #16697A;
width: 2.5rem;
height: 2.5rem;
cursor: pointer;    

&:hover {
    transition: .5s;
    color: #489FB5;
}`