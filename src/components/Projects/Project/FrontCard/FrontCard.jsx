import styled from "styled-components";
import { ContentWrapper, Heading, Subheading } from "../../..";
import { AssignedThemes, BorderRadius } from "../../../../style";


export const FrontCard = ({projectName, banner}) => {
    return (
    <ContentWrapper theme={AssignedThemes.projects.card.front} layout={"manual-grid"} templateRows={"80% 15% 5%"} gap={"1rem"} placeItems={"stretch"}>

        <StyledImg src={banner} alt=""  />
        <Heading  textOverflow={"ellipsis"} >{projectName}</Heading>
        <Subheading textAlign={"right"} alignSelf={"bottom"} weight={"200"} size={"small"}>more →</Subheading>
    </ContentWrapper>
    )
};

const StyledImg = styled.img`
object-fit: cover;    
${BorderRadius};
`
