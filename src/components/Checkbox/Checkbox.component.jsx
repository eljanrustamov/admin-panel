import React from "react";
import { CheckboxLabel } from "./Checkbox.styles";

const Checkbox = ({text}) => {
  return (
    <CheckboxLabel>
      <input type="checkbox"></input>
      <span>{text}</span>
    </CheckboxLabel>
  );
};

export default Checkbox;
