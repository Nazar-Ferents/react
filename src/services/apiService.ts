import type {IUser} from "../modules/UsersModules/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../modules/PostsModules/IPost.ts";


export const userService = {

    getUsers: async ():Promise<IUser[]> => {

        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUser: async (id:number) => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }

}

export const postService = {
    getPostsOfUserByID: async (id:number):Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(res => res.json())
    }
}