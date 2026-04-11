import {type FC, useEffect, useState} from "react";
import type {IRecipe} from "../../../modules/RecipeModules/IRecipe.ts";
import {recipesApi} from "../../../services/serviceApi.tsx";
import RecipeComponent from "../RecipeComponent/RecipeComponent.tsx";

type PropsType = {
    recipeTag: string;
}

const RecipesComponent:FC<PropsType> = ({recipeTag}) => {

    const [recipes,setRecipes] = useState<IRecipe[]>([])

    useEffect(() => {
        console.log("RENDER")
        recipesApi.getRecipesByTag(recipeTag)
            .then(value => {

                setRecipes(value)})

    }, [recipeTag]);


    return (
        <div>
            {
                recipes.map(recipe => (<RecipeComponent key={recipe.id} recipe={recipe}/>))
            }
        </div>
    );
};

export default RecipesComponent;