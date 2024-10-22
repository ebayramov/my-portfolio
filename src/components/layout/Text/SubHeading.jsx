import styled from "styled-components";
import { SetDimensions, SetFontLayout, SetMarginPadding, SetOverflow, SetSelfAlign, SetTextAlign } from "../../../style";

export const Subheading = ({
  children,
  size,
  weight,
  maxWidth,
  justifySelf,
  alignSelf,
  textAlign,
  overflow,
  overflowX,
  overflowY,
  textOverflow,
  margin,
  padding,
}) => {
    size = size ? size : "medium";
  return (
    <StyledSubheading
      $size={size}
      $weight={weight}
      $maxWidth={maxWidth}
      $justifySelf={justifySelf}
      $alignSelf={alignSelf}
      $textAlign={textAlign}
      $overflow={overflow}
      $overflowX={overflowX}
      $overflowY={overflowY}
      $textOverflow={textOverflow}
      $margin={margin}
      $padding={padding}
    >
      {children}
    </StyledSubheading>
  );
};

const StyledSubheading = styled.h2`
 ${SetSelfAlign};
 ${SetTextAlign};
 ${SetDimensions};
 ${SetOverflow};
 ${SetFontLayout};
 ${SetMarginPadding};
 
 letter-spacing: -0.05rem;
 line-height: 1.2em;
`;
