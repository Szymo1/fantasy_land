import { OpacityContainer } from "../../atoms/OpacityContainer/OpacityContainer"
import { HeaderStyle } from "./HeaderStyle"


export const Header = () => {
    return(
    <HeaderStyle>
        <OpacityContainer isAdress>0x475328573928</OpacityContainer>
        <OpacityContainer>420 ETH</OpacityContainer>
        <OpacityContainer>420 ETH</OpacityContainer>
    </HeaderStyle>
    )
}