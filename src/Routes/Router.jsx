import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "../Pages/Private Route/PrivateRoute";
import Create from "../Pages/Dashboard/Create";
import Tasks from "../Pages/Dashboard/Tasks";
import TaskStatus from "../Pages/Dashboard/TaskStatus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      // {
      //   path: "dash",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard></Dashboard>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "dash",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "createTask",
        element: <Create></Create>,
      },
      {
        path: "tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "taskStatus",
        element: <TaskStatus></TaskStatus>,
      },
    ],
  },
]);
