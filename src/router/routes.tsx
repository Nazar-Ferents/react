import {createBrowserRouter, type RouteObject} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import MainLayout from "../lsyouts/MainLayout.tsx";


const routes:RouteObject[] = [
    {
        path:'',element:<MainLayout/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'users/:id',element:<UserPage/>},
            {path:'posts',element:<PostsPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes)