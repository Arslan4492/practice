import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex pt-20 h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
