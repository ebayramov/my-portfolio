import styled from "styled-components";
import { SetDimensions, SetFontLayout, SetMarginPadding, SetOverflow, SetSelfAlign, SetTextAlign } from "../../../style";

export const Heading = ({   
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
    ...props
}) => {
    size = size ? size : "large";
  return (
    <StyledHeading   
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
    {...props}
    >
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h1`
  ${SetSelfAlign};
  ${SetTextAlign};
  ${SetDimensions};
  ${SetOverflow};
  ${SetFontLayout};
  ${SetMarginPadding};
   

  letter-spacing: -0.1rem;
  line-height: 1.2em;
 `;
