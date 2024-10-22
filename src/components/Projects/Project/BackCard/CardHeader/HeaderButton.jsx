import styled from "styled-components"
import { Paragraph } from "../../../.."
import { LineHighlightOnHover } from "../../../../../style"

export const HeaderButton = ({label, link}) => {
  
  return (
    <StyledButton formAction={link}>
      <Paragraph size={"small"}>{label}</Paragraph>
    </StyledButton>
  )
}

const StyledButton = styled.button`
padding: 0.5rem 0.25rem;  
height: min-content;
background: transparent !important;
${LineHighlightOnHover};
& > p {
  color: white !important;
}
`