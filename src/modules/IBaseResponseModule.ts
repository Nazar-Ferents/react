import type {IProducts} from "./IProducts.ts";


export interface IBaseResponseModule {
    total: number,
    skip: number,
    limit: number,
    products: IProducts[]
}