import type {IUserDummy} from "../../modules/DummyModules/UsersModules/IUserDummy.ts";
import type {IUsersGeneralDummy} from "../../modules/DummyModules/UsersModules/IUsersGeneralDummy.ts";
import {dummyURLS} from "../../constants/DummyURL/DummyURL.ts";
import type {IPostDummy} from "../../modules/DummyModules/PostsModules/IPostDummy.ts";
import type {IPostDummyGeneral} from "../../modules/DummyModules/PostsModules/IPostDummyGeneral.ts";
import type {ICommentDummy} from "../../modules/DummyModules/ComentsModules/ICommentDummy.ts";
import type {ICommentGeneralDummy} from "../../modules/DummyModules/ComentsModules/ICommentGeneralDummy.ts";


export const serviceDummy = {

    getUsers: async ():Promise<IUserDummy[]> =>{
        const userObject:IUsersGeneralDummy = await fetch(dummyURLS.users.allUsers)
            .then(response=>response.json())
        const {users}:IUsersGeneralDummy = userObject

        return users
    },
    getPosts: async ():Promise<IPostDummy[]> =>{
        const postObject:IPostDummyGeneral = await fetch(dummyURLS.posts.allPosts)
            .then(response=>response.json())
        const {posts}:IPostDummyGeneral = postObject

        return posts
    },
    getComments: async ():Promise<ICommentDummy[]> =>{
        const commentObject:ICommentGeneralDummy = await fetch(dummyURLS.comments.allComments)
          .then(response=>response.json())
        const {comments}:ICommentGeneralDummy = commentObject

        return comments
    }
}