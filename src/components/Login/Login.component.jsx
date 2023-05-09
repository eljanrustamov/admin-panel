import React, { useState, useEffect } from "react";
import DynamicButton from "../DynamicButton/DynamicButton.component";
import DynamicInput from "../DynamicInput/DynamicInput.component";
import { LoginWrapper } from "./Login.styles";
import logoBAC from "../../assets/bac_logo.png";
import supabase from "../../config/supabaseConfig";

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password
    })
    console.log(data)
  };

  return (
    <LoginWrapper>
      <img src={logoBAC} alt="s" className="logo" />
      <h6 className="title">Login to your account</h6>

      <form className="body" onSubmit={handleSubmit}>
        <DynamicInput
          type="text"
          marginBottom="16px"
          padding=".375rem .75rem"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <DynamicInput
          type="password"
          marginBottom="8px"
          padding=".375rem .75rem"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {authError && (
          <p className="error-message">
            Wrong password or username, please try again!
          </p>
        )}

        <DynamicButton type="submit" marginTop="16px">
          LOGIN
        </DynamicButton>
      </form>
    </LoginWrapper>
  );
};

export default Login;
