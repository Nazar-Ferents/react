import type {ICart} from "./ICart.ts";

export interface ICartsGeneral {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}