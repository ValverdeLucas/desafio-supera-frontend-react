import styled from "styled-components"

interface Props {
    sidebar: any;
}

export const Container = styled.div<Props>`
    background-color: #16697A;
    position: fixed;
    height: 17rem;
    border-radius: 30px;
    top: 0;
    left: 0;
    width: 250px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .5s;
    
    > svg {
        position: fixed;
        color: #EDE7E3;
        width: 35px;
        height: 35px;
        margin-top: 2rem;
        margin-left: 2rem;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: 250px;
        }
    }
`

export const Content = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
padding: 1rem;
width: 70%;
align-self: center;
text-decoration: none;
border-radius: 30px;
cursor: pointer;
border: 1px solid transparent;
font-size: 1rem;
background-color: #489FB5;
color: #EDE7E3;
animation: showButton .5s;


&:hover {
    transition: .5s;
    background-color: #82C0CC;
    color: #16697A;
}

@keyframes showButton {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: 70%;
        }        
    }
`