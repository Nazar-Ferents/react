import type {IProducts} from "../../modules/IProducts.ts";
import type {FC} from "react";
import './ComponentProducts.css'

type ComponentProductsType = {
    product:IProducts
}

const ComponentProducts:FC<ComponentProductsType> = ({product}) => {
    return (
        <div className='cell'>

            <h3>{product.title}</h3>
            <p>ID: {product.id}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>

        </div>
    );
};

export default ComponentProducts;