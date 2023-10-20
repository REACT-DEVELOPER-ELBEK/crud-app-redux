import React from "react";
import { VscAccount } from "react-icons/vsc";
import "./Nav.scss";
import { useSelector } from "react-redux";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const selector = useSelector((state) => state.username);
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__wrapper">
            <h1>CRUD OPERATIONS</h1>
            <div className="nav__account">
              <img
                src="https://static.thenounproject.com/png/3492499-200.png"
                width={"141px"}
                alt=""
              />
              <h2>{selector}</h2>
              <h3>Admin</h3>
            </div>
            <ul>
              <NavLink to="/" className={({isActive})=>isActive?"active":"incative"}>
                <AiOutlineHome /> Home
              </NavLink>
              <NavLink to="/add-student">
                <AiOutlineUserAdd /> Add student
              </NavLink>
              <NavLink to="/profile">
                <CgProfile /> Profile
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
