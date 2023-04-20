import styled from "styled-components";

export const DynamicInputStyles = styled.input`
  ${({ width,fontSize, hoveredBorderColor, borderRadius, padding,marginBottom, transition }) => `

    width: ${width};
    margin-bottom:${marginBottom};
    font-size: ${fontSize};
    border-radius: ${borderRadius};
    padding: ${padding};
    transition: ${transition};
    outline: none;
    border: 1px solid #e2e2e2;

    &:focus{
      border: 1px solid ${hoveredBorderColor};
    }
`}
`;
