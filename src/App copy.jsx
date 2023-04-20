import React, { useState, useEffect } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import LoginPage from "./components/LoginPage/LoginPage.component";
import Dashboard from "./components/Dashboard/Dashboard.component";
import supabase from "./config/supabaseConfig";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [session, setSession] = React.useState(
    sessionStorage.getItem("session")
  );
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   sessionStorage.setItem("session", JSON.stringify(session));
  //   session?.user?.aud === "authenticated"
  //     ? setIsLogin(true)
  //     : setIsLogin(false);
  // }, [session]);

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, _session) => {
  //       console.log(`Supbase auth event: ${event}`);
  //       setSession(_session);
  //     }
  //   );
  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, [session]);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
      setSession(session)
    })
  }, []);

  useEffect(() => {

    
  }, [supabase]);



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

// useEffect(() => {
//   sessionStorage.setItem("session", JSON.stringify(session));
//   session?.user?.aud === 'authenticated' ? setIsLogin(true) : setIsLogin(false)
// }, [session]);

// useEffect(() => {
//   const { data: authListener } = supabase.auth.onAuthStateChange(
//     (event, _session) => {
//       console.log(`Supbase auth event: ${event}`);
//       setSession(_session);
//     }
//   );
//   return () => {
//     authListener.subscription.unsubscribe();
//   };
// }, [session]);

//  ----

// useEffect(() => {
//   localStorage.setItem("isLogin", JSON.stringify(isLogin));
//   console.log(localStorage.getItem("isLogin"), isLogin);
// }, [isLogin]);

// useEffect(()=>{
//   const isLoginFromCookie = Cookies.get('isLogin') === 'true';
//   setIsLogin(isLoginFromCookie)
// }, [])

//  -----

// useEffect(() => {
//   const timeoutId = setTimeout(() => {
//     setIsLoaded(true);
//   }, 2000);

//   return () => clearTimeout(timeoutId);
// }, []);

// const [isLoaded, setIsLoaded] = useState(false);
// <div className="App">
// {isLoaded ? (
//   isLogin ? (
//     <CSSTransition in={isLogin} timeout={500} classNames="dashboard">
//       <Dashboard setIsLogin={setIsLogin} />
//     </CSSTransition>
//   ) : (
//     <CSSTransition in={isLogin} timeout={500} classNames="login">
//       <LoginPage setIsLogin={setIsLogin} />
//     </CSSTransition>
//   )
// ) : (
//   <CSSTransition in={!isLoaded} timeout={500} classNames="loading">
//     <div>Loading...</div>
//   </CSSTransition>
// )}
// </div>
