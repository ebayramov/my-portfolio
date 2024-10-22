import styled from "styled-components"
import { Link } from "react-router-dom"
import { routesData } from "../../../utils"

export const Nav = () => {
    const links = routesData.map((route, index) => <StyledLink key={index} to={route.path}> {route.label} </StyledLink>)
    
    return (
        <StyledNav> 
            {links}
        </StyledNav>
    )
}

const StyledNav = styled.nav`
display: flex;
background-color: ${({theme}) => theme.colors.davieGray};


`

const StyledLink = styled(Link)`
color: ${({theme}) => theme.colors.white}

`