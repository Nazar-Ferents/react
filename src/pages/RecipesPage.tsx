import {useParams} from "react-router-dom";
import RecipesComponent from "../components/RecipeComponents/RecipesComponent/RecipesComponent.tsx";

const RecipesPage = () => {

    const {recipeTag} = useParams()
    console.log(recipeTag)
    return (
        <div>

            {
                recipeTag && <RecipesComponent recipeTag={recipeTag}/>
            }

        </div>
    );
};

export default RecipesPage;