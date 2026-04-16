import type {IUserJSON} from "../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";
import {JSONUrls} from "../../constants/JSONUrls/JSONUrls.ts";
import type {IPostJSON} from "../../modules/JSONModules/PostModulesJSON/IPostJSON.ts";
import type {ICommentJSON} from "../../modules/JSONModules/CommentModulesJSON/ICommentJSON.ts";


export const JSONService = {

    getAllJSONUsers: async ():Promise<IUserJSON[]> => {

        return await fetch(JSONUrls.users.allUsers)
            .then(res => res.json())
    },

    getPostsByUserId: async (id:number):Promise<IPostJSON[]> => {
        return await fetch(JSONUrls.posts.postsByUserID(id))
            .then(res => res.json())
    },
    getCommentsByPostId: async (id:number):Promise<ICommentJSON[]> => {
        return await fetch(JSONUrls.comments.commentsByPostID(id))
            .then(res => res.json())
    }
}