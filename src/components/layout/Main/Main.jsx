import styled from "styled-components"

export const Main = ({children}) => {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}

const StyledMain = styled.main`
display: grid;
place-items: stretch;
`