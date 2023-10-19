import React, { useState } from "react";
import "./Login.scss";
import { loginBg } from "../../assets/img";
import { useDispatch } from "react-redux";

const Login = () => {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  function logIn(){
    let user = login.userName
    let password = login.password
    async function reduxDispatch(){
      try{
        dispatch({user, password, type:"LOGIN_USER"})
      }catch(err){
        console.log(err);
      }
    }
    reduxDispatch()
  }

  const dispatch = useDispatch()
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__fields">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setLogin({ ...login, userName: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <button onClick={()=>logIn()}>Login</button>
          </div>
          <div className="input__bg">
            <img src={loginBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
