import type {IUsers} from "../modules/IUsers.ts";


export const getUsers = async (): Promise<IUsers[]> => {

    const users = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())

    return users;
}