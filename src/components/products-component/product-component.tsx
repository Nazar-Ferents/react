import type {FC} from 'react';
import type {IProduct} from "../../modules/IProduct.ts";

type MyProductType = {
    product:IProduct
}

const ProductComponent:FC<MyProductType> = ({product}) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default ProductComponent;