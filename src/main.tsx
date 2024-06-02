import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UsersList from "./routes/user/UsersList.tsx";
import { usersLoader } from "./loaders/Users.loader.ts";

import EditUser from "./routes/user/EditUser.tsx";
import { editUserLoader } from "./loaders/EditUser.loader.ts";
import { editUserAction } from "./actions/EditUser.action.ts";

import CreateUser from "./routes/user/CreateUser.tsx";
import { createUserAction } from "./actions/CreateUser.action.ts";
import LoginForm from "./components/login/LoginForm.tsx";
import HomePage from "./routes/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UsersList />,
        loader: usersLoader,
      },
      {
        path: "/user/create",
        element: <CreateUser />,
        action: createUserAction,
      },
      {
        path: "/user/:id",
        element: <EditUser />,
        loader: editUserLoader,
        action: editUserAction,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/home",
    element: <HomePage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
