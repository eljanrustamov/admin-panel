import React from "react";
import { DynamicInputStyles } from "./DynamicInput.styles";

const DynamicInput = ({
  type,
  width = '100%',
  fontSize = '14px',
  borderColor ='var(--primary-color)',
  borderRadius = '4px',
  padding,
  marginBottom,
  transition = '.15s ease-in-out,box-shadow .15s ease-in-out',
  placeholder
}) => (
  <DynamicInputStyles
    type={type}
    width={width}
    fontSize={fontSize}
    borderColor={borderColor}
    borderRadius={borderRadius}
    padding={padding}
    marginBottom={marginBottom}
    transition={transition}
    placeholder={placeholder}
  />
);

export default React.memo(DynamicInput);
