import { ContentWrapper } from "../../../..";
import { AssignedThemes } from "../../../../../style";
import { ProjectFeatureOverview } from "./ProjectFeatureOverview";
import { ProjectOverview } from "./ProjectOverview";

export const CardBody = ({
  children,
  pageData,
  currentPage,
  stack,
  overview,
  projectName,
  ...props
}) => {
  return (
    <ContentWrapper
      theme={AssignedThemes.projects.card.back.body}
      layout={"flex-column"}
      justifyContent={"stretch"}
      alignItems={"stretch"}
      gap={"0.5rem"}
      padding={"1rem 1rem 0"}
      borderRadius={"1rem"}
      
      {...props}
    >
      {currentPage === 0 ? (
        <ProjectOverview
          stack={stack}
          overview={overview}
          projectName={projectName}
        />
      ) : (
        <ProjectFeatureOverview {...pageData} />
      )}
    </ContentWrapper>
  );
};
