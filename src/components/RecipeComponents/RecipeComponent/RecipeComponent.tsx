import type {FC} from "react";
import type {IRecipe} from "../../../modules/RecipeModules/IRecipe.ts";

type RecipeComponentType ={
    recipe: IRecipe;
}
const RecipeComponent:FC<RecipeComponentType> = ({recipe}) => {
    return (
        <div>

            <h2>{recipe.name}</h2>
            <h4>Ingredients:</h4>
            {recipe.ingredients.map((ingredient,index) =>
                (<ul key={index} ><li >{ingredient}</li></ul>))}
            <h4>Instructions: </h4>
            {recipe.instructions.map((instruction,index) =>
                (<p key={index}>{instruction}</p>))}
            <img src={recipe.image} alt="meal"/>


        </div>
    );
};

export default RecipeComponent;