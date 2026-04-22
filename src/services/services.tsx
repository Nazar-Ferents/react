import {urls} from "../constant/urls.ts";
import type {IUser} from "../modules/UsersModules/IUser.ts";
import type {IPost} from "../modules/PostsModules/IPost.ts";
import type {IComment} from "../modules/CommentsModules/IComment.ts";


export const serviceJSON = {

    getUsers: async ():Promise<IUser[]> => {

       return await fetch(urls.users.getUsers)
            .then((res) => res.json())
    },

    getPosts: async ():Promise<IPost[]> => {

        return await fetch(urls.posts.getPosts)
            .then((res) => res.json())
    },

    getComments: async ():Promise<IComment[]> => {

        return await fetch(urls.comments.getComments)
            .then((res) => res.json())
    }
}