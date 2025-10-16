import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../layouts/Header/Header";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/Home",
                element:<Home></Home>
            },
            {
                path:"/Login",
                element:<Login/>
            },
            {
                path:"/Register",
                element:<Register/>
            }
        ]

    },
]);
const AppRoutes=()=>{
    return<RouterProvider router={routes}/>
}
export default AppRoutes