import type {IPostDummy} from "./IPostDummy.ts";

export interface IPostDummyGeneral {
    posts: IPostDummy[];
    total: number;
    skip: number;
    limit: number;
}