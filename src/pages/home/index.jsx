import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login-system");
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      Home
      <button
        className="border border-gray-300 px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
