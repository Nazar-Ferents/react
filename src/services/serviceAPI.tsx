import type {IUser} from "../modules/UserModules/IUser.ts";
import type {IUserGeneral} from "../modules/UserModules/IUserGeneral.ts";
import {dummyURLS} from "../constants/urls.ts";
import type {ICart} from "../modules/CartModules/ICart.ts";


export const serviceAPI = {

    getUsers: async ():Promise<IUser[]> => {

        const userObject:IUserGeneral = await fetch(dummyURLS.users.allUsers)
            .then(res => res.json())

        const {users} = userObject;

        return users;
    },
    getCartsByUserId: async (id:number):Promise<ICart[]> => {
        const cartByUserIdObject = await fetch(dummyURLS.carts.cartsByUserId(id))
            const data = await cartByUserIdObject.json()
        const {carts} = data;
        return carts || [];
    }
}