import type {IUserDummy} from "../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";
import {DummyUrls} from "../../constants/DummyUrls/DummyUrls.ts";
import type {IPostDummy} from "../../modules/DummyModules/PostModulesDummy/IPostDummy.ts";
import type {ICommentDummy} from "../../modules/DummyModules/CommentModulesDummy/ICommentDummy.ts";


export const DummyService = {

    getAllDummyUsers: async ():Promise<IUserDummy[]> => {
         const userObject = await fetch(DummyUrls.users.allUsers)
            .then(res => res.json())

        return userObject.users;
    },

    getPostsByUserId: async (id:number):Promise<IPostDummy[]> => {
        const posts = await fetch(DummyUrls.posts.postsByUserID(id))
            .then(res => res.json())
        return posts.posts;
    },

    getCommentsByPostId: async (id:number):Promise<ICommentDummy[]> => {
        const comments = await fetch(DummyUrls.comments.commentsByPostID(id))
        .then(res => res.json())
        return comments.comments;
    }


}