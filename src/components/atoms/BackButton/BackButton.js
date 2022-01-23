import { Link } from "react-router-dom";
import styled from "styled-components";

const BackButtonStyle = styled(Link)`
    height: 2.5em;
    width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    text-decoration: none;
` 

export const BackButton = () => {
    return(
        <BackButtonStyle to="/">
            home
        </BackButtonStyle>
    )
}