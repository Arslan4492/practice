import axios from "axios";
import { Loader2, Trash } from "lucide-react";
import { useEffect, useState } from "react";

const User = () => {
  // hook
  // useState
  // useEffect | componentDidMount

  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    // componentDidMount
    // await/async es6
    handleFetchUsers();
  }, []); // component mount

  const handleFetchUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/employees");
    setEmployeeData(data);
  };

  const handleClick = async () => {
    const employee = {
      id: "3",
      name: "This is third employee",
      age: 22,
      salary: 2000,
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:4000/employees", employee);
      handleFetchUsers();
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (employeeId) => {
    try {
      setDeleteLoading(true);
      await axios.delete(`http://localhost:4000/employees/${employeeId}`);
      handleFetchUsers();
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-end">
        <button
          className="border border-gray-400 rounded px-3 py-1 m-4 flex items-center gap-2"
          onClick={handleClick}
        >
          {loading && <Loader2 className="animate-spin" />} Create New
        </button>
      </div>
      <ul className="grid grid-cols-4 px-4">
        {employeeData.map((employee) => (
          <li key={employee.id}>
            <div className="border border-gray-400 rounded w-52 p-2 shadow">
              <h1>Name: {employee.name}</h1>
              <h1>Age: {employee.age}</h1>
              <h1>Salary: {employee.salary}</h1>
              <div className="w-full flex items-center justify-end">
                {deleteLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Trash
                    className="text-red-500 hover:cursor-pointer"
                    onClick={() => handleDelete(employee.id)}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
