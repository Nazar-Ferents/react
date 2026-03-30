import type {IUser} from "../modules/IUser.ts";


export const getUsers = async (pg:string):Promise<IUser[]> => {
     return await fetch('https://dummyjson.com/users/'+pg)
        .then(res => res.json())

}