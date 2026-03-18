import type {ITodos, ITodosGeneral} from "../modules/ITodos.ts";
import type {IPosts, IPostsGeneral} from "../modules/IPosts.ts";
import type {ICommentGeneral, IComments} from "../modules/IComments.ts";

const endpointTodos = import.meta.env.VITE_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_BASE_URL + '/posts'
const endpointComments = import.meta.env.VITE_BASE_URL + '/comments'


 export const getTodos = async():Promise<ITodos[]> => {

    const todosObject:ITodosGeneral = await fetch(endpointTodos)
        .then(res => res.json())
    const {todos}:ITodosGeneral = todosObject
    return todos

}

export const getPosts = async():Promise<IPosts[]> => {

    const postsObject:IPostsGeneral = await fetch(endpointPosts)
        .then(res => res.json())
    const {posts}:IPostsGeneral = postsObject
    return posts

}


export const getComments = async():Promise<IComments[]> => {

    const comments:ICommentGeneral = await fetch(endpointComments)
        .then(res => res.json())

    return comments.comments
}

