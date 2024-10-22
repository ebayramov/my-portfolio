import styled from "styled-components";
import { SetDimensions, SetFontLayout, SetMarginPadding, SetOverflow, SetSelfAlign, SetTextAlign } from "../../../style";

export const Paragraph = ({
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
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  ...props
}) => {
  return (
    <StyledParagraph
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
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $width={width}
      $minWidth={minWidth}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
 ${SetSelfAlign};
 ${SetTextAlign};
 ${SetDimensions};
 ${SetOverflow};
 ${SetFontLayout};
 ${SetMarginPadding};


  line-height: 1.5em;
`;
