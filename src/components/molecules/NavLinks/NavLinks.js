import styled from "styled-components"
import { NavLink } from "react-router-dom"
import recruit from "../../../assets/images/ikonki/recruit.png"
import characters from "../../../assets/images/ikonki/characters.png"
import logs from "../../../assets/images/ikonki/logs.png"
import fight from "../../../assets/images/ikonki/fight.png"

const StyledNavLink = styled(NavLink)`
    height: 2.5em;
    width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    text-decoration: none;
`

const LinksContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Icon = styled.img`
    width: 70%;
`

export const NavLinks = () => {
    return(
        <LinksContainer>
            <Icon src={recruit} />
            <Icon src={characters} />
            <Icon src={logs} />
            <Icon src={fight} />
        </LinksContainer>
    )
}