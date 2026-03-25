import type {UserDummy} from "./UserDummy.ts";


export interface ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: UserDummy;
}

