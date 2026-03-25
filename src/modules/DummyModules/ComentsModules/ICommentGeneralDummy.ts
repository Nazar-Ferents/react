import type {ICommentDummy} from "./ICommentDummy.ts";

export interface  ICommentGeneralDummy {
    comments: ICommentDummy[];
    total: number;
    skip: number;
    limit: number;
}