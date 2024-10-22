import { realTimeChatApp, duckStrikes, ttbYouthAssociation } from "./projectsData";
import { Project } from "./Project"
import { ContentWrapper, Heading, Section } from "../layout";
import { AssignedThemes } from "../../style";


export const Projects = () => {

  const SectionLayout = {
    theme: AssignedThemes.projects.section,
    layout: "flex-column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  }
  
  const InnerContentLayout = {
    layout: "auto-grid",
    placeItems: "center",
    gap: "2rem",
    width: "min(80rem, 100%)",
    margin: "0 auto 4rem",
  }

  return (
    <Section {...SectionLayout}>
      <Heading size={"x-large"}>Project Highlights</Heading>
      <ContentWrapper {...InnerContentLayout}>
        <Project project={duckStrikes}/>
        <Project project={ttbYouthAssociation}/>
        <Project project={realTimeChatApp}/>
      </ContentWrapper>
    </Section>
  );
};

