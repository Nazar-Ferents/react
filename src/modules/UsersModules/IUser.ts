import type {IAddress} from "./IAddress.ts";


export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}