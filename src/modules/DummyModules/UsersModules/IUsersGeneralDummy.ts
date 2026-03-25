import type {IUserDummy} from "./IUserDummy.ts";

export interface IUsersGeneralDummy {
    users: IUserDummy[];
    total: number;
    skip: number;
    limit: number;
}