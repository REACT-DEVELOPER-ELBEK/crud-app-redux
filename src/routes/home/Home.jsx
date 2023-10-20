import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const URL = "https://6532d892d80bd20280f61c4c.mockapi.io/students";
  ///DELETE
  function deleteStudent(id, name) {
    axios.delete(`${URL}/${id}`)
    .catch(err=>console.log(err))
    toast.success(`${name} successfully is removed`)
  }
  //
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios(URL)
      .then((response) => setStudents(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <h1>Student list</h1>
            <div className="students__cards">
              {students.map((student, index) => (
                <div className="card" key={index}>
                  <h2>
                    {student.firstName} {student.lastName}
                  </h2>
                  <h4>
                    <span>
                      <AiFillPhone />
                    </span>
                    {student.phoneNumber}
                  </h4>
                  <h4>
                    <span>
                      <MdEmail />
                    </span>
                    {student.email}
                  </h4>
                  <div className="card__functions">
                    <button>
                      <BiEdit />
                    </button>
                    <button onClick={()=>deleteStudent(student.id, student.firstName)}>
                      <MdOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Home;
