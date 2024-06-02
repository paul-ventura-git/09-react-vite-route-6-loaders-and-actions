import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./views/user/Users.tsx";
import { usersLoader } from "./views/user/Users.loader.ts";
import EditUser from "./views/user/EditUser.tsx";
import { editUserLoader } from "./views/user/EditUser.loader.ts";
import { editUserAction } from "./views/user/EditUser.action.ts";
import CreateUser from "./views/user/CreateUser.tsx";
import { createUserAction } from "./views/user/CreateUser.action.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Users />,
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
