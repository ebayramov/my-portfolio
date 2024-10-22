import styled from "styled-components";
import { Paragraph } from "../layout";
import { SetDimensions } from "../../style";

export const Skill = ({name, icon, noName, maxHeight, maxWidth, ...props}) => {
    return (
        <BaseStyledSKill {...props} $maxHeight={maxHeight} $maxWidth={maxWidth}>
        {icon}
        {
            noName
            ? null
            : <Paragraph size={"small"}>{name}</Paragraph>
        }
      </BaseStyledSKill>
    )
};

export const BaseStyledSKill = styled.div`
${SetDimensions};
display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  gap: 1rem;
  transition: 1s;
  border-radius: 50vw;
  padding: 1rem;
`
