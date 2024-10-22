import { css } from "styled-components"

const GridWrapper = css`
    --gap: ${({$gap})=> $gap ?? `1rem`};
    display: grid;
    ${({$placeItems}) => $placeItems ? `place-items: ${$placeItems}`: null};
    ${({$placeContent}) => $placeContent ? `place-content: ${$placeContent}`: null};
    ${({$templateColumns}) => $templateColumns ? `grid-template-columns: ${$templateColumns}`: null};
    ${({$templateRows}) => $templateRows ? `grid-template-rows: ${$templateRows}`: null};
    ${({$autoRows}) => $autoRows ? `grid-auto-rows: ${$autoRows}`: null};
    ${({$gridColumn}) => $gridColumn ? `grid-column: ${$gridColumn}`: null};
    ${({$gridRow}) => $gridRow ? `grid-row: ${$gridRow}`: null};
    gap: var(--gap);
`
const ResponsiveGridSettings = css`
    ${GridWrapper};
    --min-column-size: ${({$minColumnSize})=> $minColumnSize ?? `16rem`};
    --auto-mode: ${({$auto}) => $auto ?? `auto-fit`};
`
const ResponsiveAutoGrid = css`
    ${ResponsiveGridSettings};
    grid-template-columns: repeat(
                var(--auto-mode), 
                minmax(
                    min(var(--min-column-size), 100%), 
                    1fr
                )                
            );
`
const ResponsiveFixedColumnsGrid = css`
    ${ResponsiveGridSettings};
    --column-count: ${({$columnCount})=> $columnCount ?? `3`};
    --breakpoint: calc(var(--min-column-size) * var(--column-count) + (var(--gap) * (var(--column-count) - 1))); 
    --column-size: calc((100% / var(--column-count)) - var(--gap));
    grid-template-columns: repeat(
        var(--auto-mode),
        minmax(
            min(100%, 
                max(
                    var(--column-size), 
                    (100% - var(--breakpoint)) * -999 
                )
            ),
            1fr
        )
    );
`
const FlexWrapper = css`
    display: flex;
    ${({$flexDirection}) => $flexDirection ? `flex-direction: ${$flexDirection}`: null};
    ${({$justifyContent}) => $justifyContent ? `justify-content: ${$justifyContent}`: null};
    ${({$alignItems}) => $alignItems ? `align-items: ${$alignItems}`: null};
    ${({$gap}) => $gap ? `gap: ${$gap}`: null};
`
const FlexColumn = css`
    ${FlexWrapper};
    flex-direction: column;
`
export const LayoutSelector = css`
    ${({$layout}) => 
        $layout === "manual-grid"
        ? GridWrapper
        : $layout === "auto-grid"
        ? ResponsiveAutoGrid
        : $layout === "fixed-grid"
        ? ResponsiveFixedColumnsGrid
        : $layout === "flex-column"
        ? FlexColumn
        : $layout === "flex"
        ? FlexWrapper
        : null
    }
`