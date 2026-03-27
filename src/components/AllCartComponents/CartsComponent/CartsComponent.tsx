import {type FC, useEffect, useState} from "react";
import type {ICart} from "../../../modules/CartModules/ICart.ts";
import {serviceAPI} from "../../../services/serviceAPI.tsx";
import CartComponent from "../CartComponent/CartComponent.tsx";

type CartsComponentType = {
    userId?:string
}
const CartsComponent:FC<CartsComponentType> = ({userId}) => {

    const [carts, setCarts] = useState<ICart[]>([])



        useEffect(() => {

            if(userId){
                serviceAPI.getCartsByUserId(+userId)
                    .then(allCarts => setCarts(allCarts))

            }

        }, [userId]);

    return (
        <div>
            {
                carts.map(cart => (<CartComponent cart={cart} key={cart.id}/>))
            }
        </div>
    );
};

export default CartsComponent;