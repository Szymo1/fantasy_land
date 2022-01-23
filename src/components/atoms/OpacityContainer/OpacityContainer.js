import { OpacityContainerStyle } from "./OpacityContainerStyle"


export const OpacityContainer = ({children, isAdress}) => {
    return(
        <OpacityContainerStyle isAdress={isAdress}>
            {children}
        </OpacityContainerStyle>
    )
}