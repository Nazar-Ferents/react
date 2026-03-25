import type {ReactionsDummy} from "./ReactionsDummy.ts";


export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: ReactionsDummy;
  views: number;
  userId: number;
}

