import type {IUserJSON} from "../../modules/JSONModules/UsersModules/IUserJSON.ts";
import {urlsJSONPlaceHolder} from "../../constants/JSONPlaceHolderURL/JSONPlaceHolderURL.ts";
import type {IPostJSON} from "../../modules/JSONModules/PostsModules/IPostJSON.ts";
import type {ICommentJSON} from "../../modules/JSONModules/CommentsModules/ICommentJSON.ts";


export const serviceJSON = {

    getUsers:async ():Promise<IUserJSON[]> =>{

        return await fetch(urlsJSONPlaceHolder.users.allUsers)
            .then(response => response.json())
    } ,

    getPosts:async ():Promise<IPostJSON[]> => {

        return await fetch(urlsJSONPlaceHolder.posts.allPosts)
            .then(response => response.json())
    },
    getComments:async ():Promise<ICommentJSON[]> => {

        return await fetch(urlsJSONPlaceHolder.comments.allComments)
            .then(response => response.json())
    }
}