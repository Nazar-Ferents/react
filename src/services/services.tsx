import type {IUser} from "../modules/UserModules/IUser.ts";


const url = 'https://dummyjson.com'

export const getUsers = async (page:string):Promise<IUser[]> => {
const limit = 30
    const skip = limit * (+page) - limit
    const usersObject = await fetch(url + '/users' + '?skip=' + skip)
        .then(response => response.json())

    const {users} = usersObject

    return users
}