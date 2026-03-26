import type {IPost} from "./IPosts.ts";

export interface IPostsGeneral {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}