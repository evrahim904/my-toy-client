import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration ";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateCar from "../Pages/MyToys/UpdateCar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"registration",
            element:<Registration></Registration>
        },
        {
            path:"addtoys",
            element:<AddToys></AddToys>
        },
        {
          path:"mytoys",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:"update/:id",
          element:<UpdateCar></UpdateCar>,
          loader:({params}) => fetch(`http://localhost:5000/adding/${params.id}`)
          
        }
      ]
    },
  ]);

  export default router;