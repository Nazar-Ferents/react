import { Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UsersPage from "../pages/JSONPlaceHolderPages/UsersPage.tsx";
import PostsPage from "../pages/JSONPlaceHolderPages/PostsPage.tsx";
import CommentsPage from "../pages/JSONPlaceHolderPages/CommentsPage.tsx";
import ProductsPage from "../pages/JSONPlaceHolderPages/ProductsPage.tsx";


export const routes =



        <Routes>
           <Route path={''} element={<Layout/>}>
               <Route path={'users'} element={<UsersPage/>}/>
               <Route path={'posts'} element={<PostsPage/>}/>
               <Route path={'comments'} element={<CommentsPage/>}/>
               <Route path={'products'} element={<ProductsPage/>}/>

           </Route>
        </Routes>

