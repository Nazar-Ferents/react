import type {IProducts} from "../../../modules/IProducts.ts";
import type {FC} from "react";


type ProductAuthComponentType = {
    product: IProducts;
}
const ProductAuthComponent:FC<ProductAuthComponentType> = ({product}) => {
    return (
        <div>

            <h2>{product.title}</h2>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p>

        </div>
    );
};

export default ProductAuthComponent;