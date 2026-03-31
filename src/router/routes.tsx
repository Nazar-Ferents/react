import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UserPage from "../pages/UserPage.tsx";


export const routes = createBrowserRouter([{
    path: '/',element:<Layout/>,
      children:[{
        path:'user',element:<UserPage/>
      }]
}])