import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 80vh;
width: 100vw;
background-color: #605c5c;    
`

export const Text = styled.h1`
color: white;
flex-basis: 100%;
`

export const ReturnButton = styled(FaAngleLeft)`
position: absolute;
color: #fff;
width: 5rem;
height: 5rem;
left: 5px;
cursor: pointer;

&:hover {
    transition: .5s;
    color: red;
}
    
`

export const AdvanceButton = styled(FaAngleRight)`
position: absolute;
color: #fff;
width: 5rem;
height: 5rem;
right: 5px;
cursor: pointer;    

&:hover {
    transition: .5s;
    color: red;
}
`