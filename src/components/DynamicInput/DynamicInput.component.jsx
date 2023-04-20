import React from "react";
import { DynamicInputStyles } from "./DynamicInput.styles";

const DynamicInput = ({
  type,
  placeholder,
  onChange,
  width = '100%',
  fontSize = '14px',
  hoveredBorderColor ='var(--primary-color)',
  borderRadius = '4px',
  padding,
  marginBottom,
  transition = '.15s ease-in-out,box-shadow .15s ease-in-out',
}) => (
  <DynamicInputStyles
    type={type}
    onChange={onChange}
    width={width}
    fontSize={fontSize}
    hoveredBorderColor={hoveredBorderColor}
    borderRadius={borderRadius}
    padding={padding}
    marginBottom={marginBottom}
    transition={transition}
    placeholder={placeholder}
  />
);

export default React.memo(DynamicInput);