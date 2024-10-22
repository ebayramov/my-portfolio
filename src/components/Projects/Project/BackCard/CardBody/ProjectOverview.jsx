import { ContentWrapper, Heading, Paragraph, Skill } from "../../../..";

export const ProjectOverview = ({ stack, overview, projectName }) => {
  const { frontEnd, backEnd, languages } = { ...stack };

  const displayLanguages = languages?.map(({ name, icon }, index) => (
    <Skill noName maxHeight={"4rem"} key={index} name={name} icon={icon} />
  ));

  const displayOverview = overview?.map((paragraph) => (
    <Paragraph size={"small"}>{paragraph}</Paragraph>
  ));

  return (
    <>
      <Heading>{projectName}</Heading>
      <ContentWrapper
        layout={"auto-grid"}
        minColumnSize={"2rem"}
        placeItems={"center"}
        padding={"0 1rem"}
      >
        {backEnd ? <Skill noName maxHeight={"4rem"} {...backEnd} /> : null}
        {frontEnd ? <Skill noName maxHeight={"4rem"} {...frontEnd} /> : null}
        {displayLanguages}
      </ContentWrapper>

      <ContentWrapper
        layout={"auto-grid"}
        gap={"1rem"}
        padding={"0 0 1rem"}
        overflow={"scroll"}
      >
        {displayOverview}
      </ContentWrapper>
    </>
  );
};
