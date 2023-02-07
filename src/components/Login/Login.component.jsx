import React from "react";
import Checkbox from "../Checkbox/Checkbox.component";
import DynamicButton from "../DynamicButton/DynamicButton.component";
import DynamicInput from "../DynamicInput/DynamicInput.component";
import { LoginWrapper } from "./Login.styles";
import logoBAC from "../../assets/bac_logo.png";

const Login = () => {
  return (
    <LoginWrapper>
      <img src={logoBAC} alt="s" className="logo" />
      <h6 className="title">Login to your account</h6>

      <form className="body">
        <DynamicInput
          type="email"
          marginBottom="16px"
          padding=".375rem .75rem"
          placeholder="Email"
        />

        <DynamicInput
          type="password"
          marginBottom="16px"
          padding=".375rem .75rem"
          placeholder="Password"
        />

        <DynamicButton type="submit">LOGIN</DynamicButton>
      </form>
    </LoginWrapper>
  );
};

export default Login;
