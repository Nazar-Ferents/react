import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import TagsPage from "../pages/TagsPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";


export const routes = createBrowserRouter([

    {path:'/',element:<Layout/>,

      children:[
          {index:true,element:<HomePage/>},
          {path:'tags',element:<TagsPage/>},
          {path:'tags/recipesByTags/:recipeTag',element:<RecipesPage/>}
      ]}
])