import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login/Login";
import Todo from "./pages/Todo/Todo";

const Routes = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         { path: "/", element: <Login /> },
         { path: "/todo", element: <Todo /> },
      ],
   },
]);

export default Routes;
