import {createBrowserRouter} from "react-router-dom";
import Layouts from "../layouts/layouts.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersDummyPage from "../pages/DummyPages/UsersDummyPage.tsx";
import PostsFromDummy from "../pages/DummyPages/PostsFromDummy.tsx";
import CommentsFromDummy from "../pages/DummyPages/CommentsFromDummy.tsx";
import UsersJSONPage from "../pages/JSONPages/UsersJSONPage.tsx";
import PostsFromJSON from "../pages/JSONPages/PostsFromJSON.tsx";
import CommentsFromJSON from "../pages/JSONPages/CommentsFromJSON.tsx";


export const routes = createBrowserRouter([

    {path:'/',element:<Layouts/>,
    children:[
        {index:true,element:<HomePage/>},
        {path:'usersDummy',element:<UsersDummyPage/>,
                children:[
                    {path:'postsByUserIdDummy/:userID',element:<PostsFromDummy/>,
                        children:[
                            {path:'commentsByPostIdDummy/:postID',element:<CommentsFromDummy/>}
                        ]}
                ]},
        {path:'usersJSON',element:<UsersJSONPage/>,
            children:[
                {path:'postsByUserIdJSON/:userID',element:<PostsFromJSON/>,
                children:[
                    {path:'commentsByPostIdJSON/:postID',element:<CommentsFromJSON/>}
                ]}
            ]}
    ]}
])