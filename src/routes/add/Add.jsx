import React, { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const URL = "https://6532d892d80bd20280f61c4c.mockapi.io/students";
  const [addedStudent, setAddedStudent] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  function addStudent() {
    if (
      (addedStudent.firstName,
      addedStudent.lastName,
      addedStudent.phoneNumber,
      addedStudent.email).trim().length == 0
    ) {
      toast.error("Please fill inputs", {
        theme: "colored",
      });
    } else {
      axios.post(`${URL}`, {
      });
      toast.success(`${addedStudent.firstName} is successfully added`, {
        theme: "colored",
      });
      setTimeout(() => {
        toHome("/");
      }, 1270);
    }
  }
  const toHome = useNavigate();
  return (
    <>
      <div className="add">
        <div className="container">
          <div className="add__wrapper">
            <h1>Add student</h1>
            <div className="add__fields">
              <input
                type="text"
                placeholder="First name"
                onChange={(e) =>
                  setAddedStudent({
                    ...addedStudent,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) =>
                  setAddedStudent({ ...addedStudent, lastName: e.target.value })
                }
              />
              <input
                type="phone"
                placeholder="Phone number"
                onChange={(e) =>
                  setAddedStudent({
                    ...addedStudent,
                    phoneNumber: e.target.value,
                  })
                }
                pattern="/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/"
              />
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                  setAddedStudent({ ...addedStudent, email: e.target.value })
                }
              />
            </div>
            <button onClick={() => addStudent()}>+ Add</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Add;
