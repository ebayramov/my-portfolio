import styled from "styled-components";
import { ContentWrapper, Paragraph, Subheading } from "../../../..";
import { BorderRadius } from "../../../../../style";

export const ProjectFeatureOverview = ({ media, texts, pageTitle }) => {
  return (
    <>
      <StyledImg src={media} alt="" />

      <ContentWrapper
        layout={"auto-grid"}
        overflow={"scroll"}
        padding={"0.25rem"}
      >
        <Subheading size={"medium"} weight={"200"}>
          {pageTitle}:{" "}
        </Subheading>
        {texts?.map((text, index) => (
          <Paragraph key={index} size={"small"}>
            {text}
          </Paragraph>
        ))}
      </ContentWrapper>
    </>
  );
};

const StyledImg = styled.img`
  min-height: 50%;
  max-height: 50%;
  min-width: 80%;
  max-width: 80%;
  align-self: center;
  ${BorderRadius};
`;
