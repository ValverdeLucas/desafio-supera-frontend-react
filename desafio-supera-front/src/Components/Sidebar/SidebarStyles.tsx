import styled from "styled-components"

interface Props {
    sidebar: any;
}

export const Container = styled.div<Props>`
    background-color: #302460;
    position: fixed;
    height: 17rem;
    border-radius: 30px;
    top: 0;
    left: 0;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .5s;
    
    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: 300px;
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
width: 60%;
align-self: center;
text-decoration: none;
border-radius: 30px;
cursor: pointer;
background-color: red;
color: white;
animation: showButton .5s;

&:hover {
    transition: .5s;
    background-color: white;
    color: red;
}

@keyframes showButton {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: 60%;
        }        
    }
`