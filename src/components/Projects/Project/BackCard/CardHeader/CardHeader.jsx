import { ContentWrapper } from "../../../..";
import { HeaderButton } from "./HeaderButton";

export const CardHeader = ({children, links, ...props}) => {

  const HeaderButtons = links.map((button, index) => (
    <HeaderButton key={index} {...button} />
  ));

  return (
    <form target="_blank">
      <ContentWrapper
        layout={"auto-grid"}
        minColumnSize={"3rem"}
        gap={"0.5rem"}
        height={"100%"}
        {...props}
      >
        {HeaderButtons}
      </ContentWrapper>
    </form>
  );
}
