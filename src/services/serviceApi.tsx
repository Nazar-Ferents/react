import {recipesUrls} from "../constants/urls.ts";
import type {ITags} from "../modules/RecipeModules/ITags.ts";
import type {IRecipe, IRecipeGeneral} from "../modules/RecipeModules/IRecipe.ts";


export const recipesApi = {

    getAllTags: async ():Promise<ITags> => {

        return await fetch(recipesUrls.tags.allTags)
            .then((res) => res.json())

    },

    getRecipesByTag: async (tag:string):Promise<IRecipe[]> => {

        const recipesObject:IRecipeGeneral  = await fetch(recipesUrls.recipes.allRecipesByTag(tag))
            .then(res => res.json())

        const {recipes} = recipesObject
        return recipes
    }
 }