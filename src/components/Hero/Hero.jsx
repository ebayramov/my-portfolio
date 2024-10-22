import styled from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section, Subheading } from "../layout";
import { AssignedThemes } from "../../style";

export const Hero = () => {
    return (

        <Section
            theme={AssignedThemes.hero}
            layout={"auto-grid"}
            minColumnSize={"44ch"}
            placeItems={"center center"}
        >
            <CoverImg src="HeroBanner.png" alt="" />

            <ContentWrapper
                layout={"flex"}
                flexDirection={"column"}
                gap={"4rem"}
                theme={AssignedThemes.hero}
            >
                <ContentWrapper layout={"flex-column"} gap={"0.5rem"} >
                    <Heading size={"xx-large"}>Elmaddin Bayramov</Heading>
                    <Subheading>Frontend Developer</Subheading>
                    <Paragraph maxWidth={"45ch"}>Crafting innovative solutions with expertise in Javascript, React, Next.js and PHP. Let's build something amazing together!</Paragraph>
                </ContentWrapper>
                <form action="Elmaddin Bayramov Resume.pdf" value={"Download CV"} target="_blank">
                    <StyledButton> <Paragraph>Get My Resume</Paragraph></StyledButton>
                </form>
            </ContentWrapper>
        </Section>
    )
};


const CoverImg = styled.img`
    object-fit: contain;
    border-radius: 1rem;
    align-self: center;
    justify-self: center;
    max-height: 80%;
    margin-top: 2rem;
`


const StyledButton = styled.button`
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.saffron};
  padding: 0.6rem 1rem;
  align-self: center;
    
  &:hover {
    box-shadow: 0 0 30px 2px #48abe0; /* Highlight effect */
    transition: box-shadow 0.4s ease-in-out; /* Smooth transition */
  }
`