import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CarFormPage from "../pages/CarFormPage.tsx";


export const routes = createBrowserRouter([
    {path:'/',element:<Layout/>,
      children:[
          {index:true,element:<HomePage/>},
          {path:'cars',element:<CarsPage/>},
          {path:'carsForm',element:<CarFormPage/>}
      ]}
])