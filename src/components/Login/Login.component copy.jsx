import React, { useState, useEffect } from "react";
import DynamicButton from "../DynamicButton/DynamicButton.component";
import DynamicInput from "../DynamicInput/DynamicInput.component";
import { LoginWrapper } from "./Login.styles";
import logoBAC from "../../assets/bac_logo.png";

import supabase from "../../config/supabaseConfig";
import Cookies from 'js-cookie';

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const [fetchError, setFetchError] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("Admin").select();
      
      setUsers(data);
      if (error) {
        setFetchError("Could not fetch the data.");
        setUsers(null);
        console.log(error);
      }
      if (data) {
        setUsers(data);
        setFetchError(null);
      }
    };
    fetchUsers();

  }, []);

  // const checkCredentials = (username, password) => {
  //   const userAdmin = users[0];
  //   //
  //   const usernameDb = userAdmin.username;
  //   const passwordDb = userAdmin.password;

  //   return username === usernameDb && password === passwordDb ? true : false;
  // };

  const checkCredentials = async (username, password) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password
    })
    setAuthError(error)
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkCredentials(username, password);

    if (isValid) {
      setAuthError(false);
      // redirect to <Dashboard/>
      setIsLogin(true);
      Cookies.set('isLogin', 'true');
    } else {
      setAuthError(true);
    }
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
