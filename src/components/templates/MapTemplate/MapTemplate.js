import styled from "styled-components";
import { BackButton } from "../../atoms/BackButton/BackButton";
import { Header } from "../../molecules/Header/Header";
import mysteryForest from "../../../assets/images/mysteryForest.png";

const MapTemplateStyle = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 5em 1fr 5em;
    grid-template-rows: 5em 1fr;
`

const TopLeft = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Top = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
`

const Left = styled.div`
    grid-column: 1/2;
    grid-row: 2/3;
`

const Right = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
`

const Main = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Island = styled.img`
    width: 80%;
    cursor: pointer;
    transition: transform 600ms;
    &:hover{
        transform: scale(1.1);
    }
`



export const MapTemplate = () => {
    return(
        <MapTemplateStyle>
            <TopLeft>
                <BackButton />
            </TopLeft>
            <Top>
                <Header />
            </Top>
            <Main>
                <Island src={mysteryForest} />
            </Main>
        </MapTemplateStyle>
    )
}