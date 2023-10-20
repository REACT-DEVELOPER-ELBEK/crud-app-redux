import "./App.css";
import Login from "./routes/auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Nav from "./pages/nav/Nav";
import Add from "./routes/add/Add";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-student/" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
