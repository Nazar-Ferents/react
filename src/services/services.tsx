import type {IUser} from "../modules/UsersModules/IUser.ts";
import {dummyURLS} from "../constants/dummyURLS.ts";
import type {IUsersGeneral} from "../modules/UsersModules/IUsersGeneral.ts";
import type {IPost} from "../modules/PostsModules/IPosts.ts";
import type {IPostsGeneral} from "../modules/PostsModules/IPostsGeneral.ts";


export const services = {

    getUsers: async ():Promise<IUser[]> => {

        const usersObject:IUsersGeneral = await fetch(dummyURLS.users.allUsers)
            .then((res) => res.json())

        const {users}:IUsersGeneral = usersObject;

        return users;
    },

    getPosts: async ():Promise<IPost[]> => {

        const postsObject:IPostsGeneral = await fetch(dummyURLS.posts.allPosts)
        .then((res) => res.json())

        const {posts}:IPostsGeneral = postsObject;
        return posts;
    }
 }