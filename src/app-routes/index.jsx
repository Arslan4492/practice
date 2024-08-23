import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AppLayout from "../app-layout";
import Employees from "../pages/employee";
import Picture from "../pages/picture";
import User from "../pages/user";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthRequired from "./auth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRequired />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/pictures" element={<Picture />} />
            <Route path="/users" element={<User />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
