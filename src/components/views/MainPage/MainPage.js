import { Wrapper } from "../../atoms/Wrapper/Wrapper"
import { MainBackground } from "../../backgrounds/MainBackground/MainBackground"
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate"


export const MainPage = () => {
    return(
        <MainBackground>
            <MainTemplate>
                <Wrapper></Wrapper>
            </MainTemplate>
        </MainBackground>
    )
}