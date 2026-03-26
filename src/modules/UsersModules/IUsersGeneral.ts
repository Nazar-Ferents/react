import type {IUser} from "./IUser.ts";

export interface  IUsersGeneral{
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}