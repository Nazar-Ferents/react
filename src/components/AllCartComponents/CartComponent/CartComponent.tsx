import type {FC} from "react";
import type {ICart} from "../../../modules/CartModules/ICart.ts";

type CartComponentType ={
    cart: ICart;
}
const CartComponent:FC<CartComponentType> = ({cart}) => {
    return (
        <div>

            <p>Total: {cart.total}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p>Total Products: {cart.totalProducts}</p>
            {cart.products.map(product => (<p key={product.id}>{product.title}
                Price: {product.price}</p>))}


        </div>
    );
};

export default CartComponent;