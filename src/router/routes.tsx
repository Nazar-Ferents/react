import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/MainPages/UsersPage.tsx";
import PostsPage from "../pages/MainPages/PostsPage.tsx";
import CommentsPage from "../pages/MainPages/CommentsPage.tsx";
import UsersPageJSON from "../pages/JSONPlaceHolderPages/UsersPageJSON.tsx";
import PostsPageJSON from "../pages/JSONPlaceHolderPages/PostsPageJSON.tsx";
import CommentsPageJSON from "../pages/JSONPlaceHolderPages/CommentsPageJSON.tsx";
import UsersPageDummy from "../pages/DummyPages/UsersPageDummy.tsx";
import PostsPageDummy from "../pages/DummyPages/PostsPageDummy.tsx";
import CommentsPageDummy from "../pages/DummyPages/CommentsPageDummy.tsx";


export const routes = createBrowserRouter([

    {path:'',element:<Layout/>,
      children:[
          {path:'users',element:<UsersPage/>,
            children:[
                {path:'/users/jsonplaceholder', element:<UsersPageJSON/>},
                {path:'/users/dummyjson', element:<UsersPageDummy/>}
            ]
          },
          {path:'posts',element:<PostsPage/>,
             children:[
                 {path:'/posts/jsonplaceholder',element:<PostsPageJSON/>},
                 {path:'/posts/dummyjson',element:<PostsPageDummy/>}
             ]},
          {path:'comments',element:<CommentsPage/>,
            children:[
                {path:'/comments/jsonplaceholder',element:<CommentsPageJSON/>},
                {path:'/comments/dummyjson',element:<CommentsPageDummy/>}
            ]}
      ]
    }
])