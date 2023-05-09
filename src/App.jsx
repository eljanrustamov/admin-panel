import React, { useState, useEffect } from "react";
import "./App.scss";
import { CSSTransition } from "react-transition-group";
import LoginPage from "./components/LoginPage/LoginPage.component";
import Dashboard from "./components/Dashboard/Dashboard.component";
import supabase from "./config/supabaseConfig";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setIsLogin(session !== null); // login olanda, isLogin true olsun

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLogin(session !== null); // auth deyisende, isLogini guncelle
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {isLogin ? (
        <CSSTransition in={isLogin} timeout={500} classNames="dashboard">
          <Dashboard setIsLogin={setIsLogin} />
        </CSSTransition>
      ) : (
        <CSSTransition in={isLogin} timeout={500} classNames="login">
          <LoginPage setIsLogin={setIsLogin} />
        </CSSTransition>
      )}
    </div>
  );
}

export default App;
