import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateData from "./components/UpdateData.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Provider from "./Provider.jsx";
import User from "./components/User.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
    children: [
      {
        path: "/",
        element: <AddCoffee />,
      },
      {
        path: "/update/:id",
        element: <UpdateData />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/user',
        element:<User/>,
        loader:()=>fetch('http://localhost:5000/user')
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
