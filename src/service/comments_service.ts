import type {IComment} from "../modules/IComment.ts";

const url = import.meta.env.VITE_API_COMMENTS;
export const getComments = async():Promise<IComment[]> => {

    return await fetch(url + '/' + 'comments')
        .then(res => res.json())
} 