import React from "react";
import { DynamicButtonStyles } from "./DynamicButton.styles";

const DynamicButton = ({
  type,
  width = "100%",
  fontSize = '14px',
  backgroundColor = "var(--primary-color)",
  hoveredBackgroundColor = "rgba(22,97,255,0.8)",
  color = "#fff",
  padding = "8px",
  border="none",
  borderRadius = "5px",
  children
}) => {
  return (
    <DynamicButtonStyles
      type={type}
      width={width}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      hoveredBackgroundColor={hoveredBackgroundColor}
      color={color}
      padding={padding}
      border={border}
      hoveredBorder="1px solid var(--primary-color)"
      borderRadius={borderRadius}
    >
      {children}
    </DynamicButtonStyles>
  );
};

export default React.memo(DynamicButton);
