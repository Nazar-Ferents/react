import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/JSONPlaceHolderPages/UsersPage.tsx";
import PostsPage from "../pages/JSONPlaceHolderPages/PostsPage.tsx";
import CommentsPage from "../pages/JSONPlaceHolderPages/CommentsPage.tsx";
import ProductsPage from "../pages/JSONPlaceHolderPages/ProductsPage.tsx";


export const routes = createBrowserRouter([

    {path:'',element:<Layout/>,
      children:[
          {path:'users',element:<UsersPage/>},
          {path:'posts',element:<PostsPage/>},
          {path:'comments',element:<CommentsPage/>},
          {path:'products',element:<ProductsPage/>}
      ]
    }
])