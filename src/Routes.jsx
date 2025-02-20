import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login/Login";

const Routes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {path: "/", element: <Login/>},
        ]
    }
]);

export default Routes;