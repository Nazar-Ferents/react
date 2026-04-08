import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../../services/service.ts";
import type {IProducts} from "../../../modules/IProducts.ts";
import ProductAuthComponent from "../ProductAuthComponent/ProductAuthComponent.tsx";

export const ProductsAuthComponent = () => {

    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {

        loadAuthProducts()
            .then(value => setProducts(value))
            .catch(reason => console.log(reason));
        refresh().then( () => loadAuthProducts());
    }, []);
    return (
        <div>

            {
                products.map((product) => (<ProductAuthComponent key={product.id} product={product} />))
            }

        </div>
    );
};