import styled from 'styled-components'

export const OpacityContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    opacity: 40%;
    padding: 1em;
    width: ${props => (props.isAdress ? "10em" : "5em")};
    border-radius: 10px;
`