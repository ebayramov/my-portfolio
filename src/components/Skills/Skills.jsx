import styled, { css } from "styled-components";
import { ContentWrapper, Heading, Paragraph, Section } from "../layout";
import { useState } from "react";
import { AssignedThemes, BorderRadius, CenteredFlex, LineHighlightOnHover } from "../../style";
import { Skill } from "./Skill";
import { skillData } from "./skillData";

export const Skills = () => {
  const [highlighted, setHighighted] = useState("");

  const skills = Object.values(skillData).map(({ name, icon, type }, index) => (
    <HighlightableSkill key={index} $highlight={type.includes(highlighted)} name={name} icon={icon}/>
  ));

  return (
    <Section
      layout={"flex-column"}
      theme={AssignedThemes.skills}
      justifyContent={"center"}
    >

      <ContentWrapper layout={"flex-column"} gap={"1rem"}>
        
        <ContentWrapper
          layout={"fixed-grid"}
          columnCount={3}
          minColumnSize={"2rem"}
          gap={"2rem"}
          minHeight={"5rem"}
          alignSelf={"stretch"}
          theme={AssignedThemes.skills}

        >

          <ContentLineHighlight
            onTouchStart={() => setHighighted("design")}
            onPointerOver={() => setHighighted("design")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
            minHeight={"5rem"}
          >
            <Heading size={"medium"}>Design</Heading>
          </ContentLineHighlight>
          
          <ContentLineHighlight
            onTouchStart={() => setHighighted("front-end")}
            onPointerOver={() => setHighighted("front-end")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
          minHeight={"5rem"}
          >
            <Heading size={"medium"}>Front-End</Heading>
          </ContentLineHighlight>
          
          <ContentLineHighlight
            onTouchStart={() => setHighighted("back-end")}
            onPointerOver={() => setHighighted("back-end")}
            onPointerOut={() => setHighighted("")}
            {...CenteredFlex}
          minHeight={"5rem"}
          >
            <Heading size={"medium"}>Back-End</Heading>
          </ContentLineHighlight>

        </ContentWrapper>

        <ContentWrapper
          layout={"auto-grid"}
          gap={"3rem"}
          minColumnSize={"4rem"}
          padding={"1rem"}
          placeItems={"center"}
          theme={AssignedThemes.skills}
        >
          {skills}
        </ContentWrapper>
      </ContentWrapper>
    </Section>
  );
};

const ContentLineHighlight = styled(ContentWrapper)`
${BorderRadius};
${LineHighlightOnHover}

& * {
  pointer-events: none;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
`

const HighlightableSkill = styled(Skill)`

  ${({ $highlight }) =>
    $highlight
    ? `
      box-shadow: 0 0 30px 2px #48abe0;
    `
    : null};
`;

