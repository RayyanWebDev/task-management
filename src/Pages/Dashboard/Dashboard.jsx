import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-36 min-h-full bg-orange-300">
        <ul>
          <li>
            <NavLink to="/dash/createTask">Create Task</NavLink>{" "}
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/dash/tasks">Tasks</NavLink>{" "}
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/dash/taskStatus">Task Status</NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
