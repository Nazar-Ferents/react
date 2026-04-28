import type {IUser} from "../modules/IUser.ts";

const baseUrl = "https://dummyjson.com"

export const ServiceDummy = {

    getUsers : async (pg:string): Promise<IUser[]> => {

        const limit = 30;

        const skip = limit * (+pg) - limit
        const usersObject =  await fetch(`${baseUrl}/users?skip=${skip}`)
            .then(res => res.json())

        const {users} = usersObject
        return users;


    }
}