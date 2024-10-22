import styled from "styled-components"
import { LayoutSelector, SectionPadding, SetDimensions, SetMarginPadding, SetOverflow, SetTextAlign, ThemeSelector } from "../../../style"

export const Section = ({
                children, 
                theme, 
                layout, 
                placeItems,
                placeContent,
                flexDirection,
                justifyContent,
                alignItems,
                gridColumn,
                gridRow,
                textAlign,
                minColumnSize,
                columnCount,
                templateColumns,
                templateRows,
                autoRows,
                gap,
                overflow,
                overflowX,
                overflowY,
                textOverflow,
                height,
                minHeight,
                maxHeight,
                width,
                minWidth,
                maxWidth,
                margin,
                padding,
                ...props
            }) => {

                return (
                    <StyledSection
                    $theme={theme}
                    $layout={layout}
                    $placeItems={placeItems}
                    $placeContent={placeContent}
                    $alignItems={alignItems}
                    $autoRows={autoRows}
                    $gridColumn={gridColumn}
                    $gridRow={gridRow}
                    $justifyContent={justifyContent}
                    $flexDirection={flexDirection}
                    $gap={gap}
                    $minColumnSize={minColumnSize}
                    $columnCount={columnCount}
                    $textAlign={textAlign}
                    $templateColumns={templateColumns}
                    $templateRows={templateRows}
                    $overflow={overflow}
                    $overflowX={overflowX}
                    $overflowY={overflowY}
                    $textOverflow={textOverflow}
                    $height={height}
                    $minHeight={minHeight}
                    $maxHeight={maxHeight}
                    $width={width}
                    $minWidth={minWidth}
                    $maxWidth={maxWidth}
                    $margin={margin}
                    $padding={padding}
                    {...props}
                    >
            {children}
        </StyledSection>
    )
}

const StyledSection = styled.section`
    ${ThemeSelector};
    ${LayoutSelector};
    ${SetTextAlign};
    ${SectionPadding};
    ${SetOverflow};
    ${SetDimensions};
    ${SetMarginPadding};
    `
