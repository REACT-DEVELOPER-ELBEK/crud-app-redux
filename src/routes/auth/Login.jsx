import React, { useState } from "react";
import "./Login.scss";
import { loginBg } from "../../assets/img";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const toHome = useNavigate();
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  function logIn() {
    if ((login.userName, login.password).trim().length == 0) {
      toast.error("Please fill the fields", {
        theme: "colored"
      })
    } else if (login.password.trim().length < 8) {
      toast.warning("Password should be at least 8 characters", {
        theme: "colored"
      })
    }else{
      let user = login.userName;
      let password = login.password;
      async function reduxDispatch() {
        try {
          dispatch({ user, password, type: "LOGIN_USER" });
          toHome("/");
        } catch (err) {
          console.log(err);
        }
      }
      reduxDispatch();
    }
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__wrapper">
            <div className="login__fields">
              <h1>Login</h1>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setLogin({ ...login, userName: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
              <button type="submit" onClick={() => logIn()}>
                Login
              </button>
            </div>
            <div className="input__bg">
              <img src={loginBg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
