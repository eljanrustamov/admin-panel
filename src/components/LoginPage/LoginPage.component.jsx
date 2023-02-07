import React from "react";
import Login from "../Login/Login.component";
import { LeftBG, RightBG } from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <div className="row">
      <LeftBG className="col-sm-12 col-md-3 position-relative vh-100">
        <div className="row justify-content-center">
          <div className="col-10">
            <Login />
          </div>
        </div>
      </LeftBG>
      <RightBG className="col-md-9 vh-100"></RightBG>
    </div>
  );
};

export default LoginPage;

