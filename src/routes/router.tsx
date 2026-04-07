import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/layout.tsx";
import Cars from "../pages/CarsPage.tsx";
import CarsForm from "../pages/CarsFormPage.tsx";


export const routes = createBrowserRouter([
    {path:'/',element:<Layout/>,
       children:[
           {
               path:'cars',element:<Cars/>
           },
           {
               path:'carsForm',element:<CarsForm/>
           }
       ]}
])