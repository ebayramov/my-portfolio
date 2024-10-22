import styled from "styled-components";
import { AssignedThemes, BorderRadius, SectionPadding, ThemeSelector } from "../../../style";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../../../assets";
import { ContentWrapper } from "../ContentWrapper";
import { Paragraph, Subheading } from "../Text";

export const Footer = () => {
  return (
    <StyledFooter $theme={AssignedThemes.footer}>

      <ContentWrapper layout={"auto-grid"}>

        <ContentWrapper
          layout={"flex-column"}
          gap={"1rem"}
          alignItems={"center"}
          $theme={AssignedThemes.footer}
        >
          <Subheading>Contact</Subheading>

          <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}
          >
            <MailIcon width={"2rem"} />
            <Paragraph as={"a"} href="mailto:ebayramov06@gmail.com?subject=Hi I saw your portifolio">ebayramov06@gmail.com</Paragraph>
          </ContentWrapper>

          <ContentWrapper layout={"flex"} gap={"1rem"} alignItems={"center"}>
            <PhoneIcon width={"2rem"} />
            <Paragraph as={"a"} href="tel:+17096328065">(+1) 709-632-8065</Paragraph>
          </ContentWrapper>

        </ContentWrapper>

        <ContentWrapper
          layout={"flex-column"}
          gap={"1rem"}
          alignItems={"center"}
          $theme={AssignedThemes.footer}
        >

          <Subheading>Follow Me </Subheading>
          <ContentWrapper
            layout={"flex"}
            gap={"1rem"}
            justifyContent={"center"}
          >
            <a href="https://github.com/ebayramov/" target="_blank">
              <GitHubIcon width={"2rem"} />
            </a>
            <a href="https://www.linkedin.com/in/elmaddin-bayramov/" target="_blank">
              <LinkedInIcon width={"2rem"} />
            </a>
          </ContentWrapper>

          <form action="Elmaddin Bayramov Resume.pdf" value={"Download CV"} target="_blank">
            <StyledButton> <Paragraph>Get My Resume</Paragraph></StyledButton>
          </form>
        </ContentWrapper>
      </ContentWrapper>

      <Paragraph alignSelf={"center"} size={"small"}>
        &copy; {new Date().getFullYear()} Elmaddin Bayramov. All rights reserved.
      </Paragraph>


    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  ${ThemeSelector}
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-block: 2rem 1rem;
`;

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

