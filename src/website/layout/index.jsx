import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Picture from "../picture";

const Layout = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("home");

  const handlePages = (_page) => {
    const obj = {
      home: <p>Home</p>,
      employee: <p>Employee</p>,
      picture: <Picture />,
    };

    return obj[_page];
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex pt-20 h-full">
        <Sidebar handlePage={(page) => setPage(page)} />
        {/* {page === "home" && <p>Home</p>}
        {page === "employee" && <p>Employee</p>}
        {page === "picture" && <p>Picture</p>} */}
        {/* {page === "home" ? (
          <p>Home</p>
        ) : page === "employee" ? (
          <p>Employee</p>
        ) : (
          <p>Picture</p>
        )} */}
        {handlePages(page)}
      </div>
    </div>
  );
};

export default Layout;
