import styled from "styled-components";
import { Header } from "../../molecules/Header/Header";
import { NavLinks } from "../../molecules/NavLinks/NavLinks";

const MainTemplateStyle = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 10em 1fr;
    grid-template-rows: 7em 1fr;
`

const Left = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
`

const Top = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
`

const Main = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainTemplate = ({children}) => {
    return(
    <MainTemplateStyle>
        <Top>
            <Header />
        </Top>
        <Left>
            <NavLinks />
        </Left>
        <Main>
            {children}
        </Main>
    </MainTemplateStyle>
    )
}