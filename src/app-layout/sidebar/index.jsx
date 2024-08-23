import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-52 border-r h-full">
      <ul>
        <li className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <Link to="/employees">
          <li className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer">
            Employees
          </li>
        </Link>
        <li className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer">
          <Link to="/pictures">Pictures</Link>
        </li>
        <li className="mx-3 my-2 bg-emerald-400 rounded p-1 text-white hover:cursor-pointer">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
