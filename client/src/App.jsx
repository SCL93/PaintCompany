import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Paints from "./components/Paint/Paints";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import AddPaint from "./components/Paint/AddPaint";
import EditPaint from "./components/Paint/EditPaint";
import DeletePaint from "./components/Paint/DeletePaint";
import AddUser from "./components/User/AddUser";
import Users from "./components/User/Users";
import EditUser from "./components/User/EditUser";
import DeleteUser from "./components/User/DeleteUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/paints" element={<Paints />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/addpaint" element={<AddPaint />}></Route>
          <Route path="/paint/:id" element={<EditPaint />}></Route>
          <Route path="/deletepaint/:id" element={<DeletePaint />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/user/:id" element={<EditUser />}></Route>
          <Route path="/deleteuser/:id" element={<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
