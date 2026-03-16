import type {IPosts} from "../modules/IPosts.ts";

const postsUrl = import.meta.env.VITE_API_POSTS;

export const getPost = async():Promise<IPosts[]> =>{

    return  await fetch(postsUrl + '/' + 'posts')
    .then(res => res.json())

}