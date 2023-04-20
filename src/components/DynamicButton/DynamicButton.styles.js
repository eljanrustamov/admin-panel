import styled from "styled-components";

export const DynamicButtonStyles = styled.button`
  ${({ width, fontSize,backgroundColor,hoveredBackgroundColor, color, padding,marginTop, border, hoveredBorder, borderRadius }) => `
        
        width: ${width};
        fontSize: ${fontSize};
        background-color: ${backgroundColor};
        color: ${color};
        padding:${padding};
        margin-top: ${marginTop};
        border: ${border};
        border-radius: ${borderRadius};
        outline:none;
        border:none;
        transition:0.3s all;

        &:hover{
            background-color: ${hoveredBackgroundColor};
        }
    `}
`;
