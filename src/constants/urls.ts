const baseURL = "https://dummyjson.com/recipes";


export const recipesUrls = {
    recipes:{
        allRecipes: baseURL,
        allRecipesByTag: (tag: string) =>{
            return baseURL + "/tag/" + tag
        }
    },
        tags: {
            allTags: baseURL + "/tags"
        },


    }
