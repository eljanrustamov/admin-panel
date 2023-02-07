import styled from "styled-components";

export const DynamicInputStyles = styled.input`
  ${({ width,fontSize, borderColor, borderRadius, padding,marginBottom, transition }) => `

    width: ${width};
    margin-bottom:${marginBottom};
    font-size: ${fontSize};
    border-color:${borderColor};
    border-radius: ${borderRadius};
    padding: ${padding};
    transition: ${transition};
    outline: none;
`}
`;
