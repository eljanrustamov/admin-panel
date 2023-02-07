import styled from "styled-components";

export const DynamicButtonStyles = styled.button`
  ${({ width, fontSize,backgroundColor,hoveredBackgroundColor, color, padding, border, hoveredBorder, borderRadius }) => `
        
        width: ${width};
        fontSize: ${fontSize};
        background-color: ${backgroundColor};
        color: ${color};
        padding:${padding};
        border: ${border};
        border-radius: ${borderRadius};
        font-size:14px;
        outline:none;
        transition:0.3s all;

        &:hover{
            background-color: ${hoveredBackgroundColor};
        }
    `}
`;
