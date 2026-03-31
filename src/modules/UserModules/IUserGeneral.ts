import type {IUser} from "./IUser.ts";

export interface IUserGeneral {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}