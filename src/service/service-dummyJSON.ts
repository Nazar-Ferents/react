import type {IProducts, IProductsGeneral} from "../modules/IProducts.ts";

const endpointProduct = import.meta.env.VITE_BASE_URL + "/products";


export const getProducts = async ():Promise<IProducts[]> => {

    const products: IProductsGeneral = await fetch(endpointProduct)
        .then(res => res.json())

    return products.products
}