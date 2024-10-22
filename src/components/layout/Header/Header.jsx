import styled from "styled-components"
import { Heading } from "../Text"
import { LayoutSelector, SetMarginPadding, ThemeSelector } from "../../../style"
import { ContentWrapper } from "../ContentWrapper"
import { GitHubIcon, GmailIcon, LinkedInIcon } from "../../../assets"

export const Header = () => {
  return (
    <StyledHeader $layout={"flex"} $justifyContent={"flex-end"} $alignItems={"center"} $padding={"0 1rem"}>
      <ContentWrapper
        layout={"flex"}
        gap={"2rem"}
        justifyContent={"center"}
        padding={"2rem"}
      >
        <a href="mailto:ebayramov06@gmail.com?subject=Hi I saw your portfolio">
          <GmailIcon width={"2rem"} />
        </a>

        <a href="https://github.com/ebayramov/" target="_blank">
          <GitHubIcon width={"2rem"} />
        </a>
        <a href="https://www.linkedin.com/in/elmaddin-bayramov/" target="_blank">
          <LinkedInIcon width={"2rem"} />
        </a>
      </ContentWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    ${ThemeSelector};
    ${LayoutSelector};
    ${SetMarginPadding};
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    & > * {
      padding: 0.9rem 2rem;
    }

`
