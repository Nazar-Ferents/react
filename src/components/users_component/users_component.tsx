import  {useEffect, useState} from 'react';
import type {IUser} from "../../modules/IUser.ts";
import UserComponent from "../user_component/user_component.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [items, setItems] = useState<IUser | null>(null);

    const foo = (item:IUser) =>{
        setItems(item);
    }


    useEffect(() => {

        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users);
        }
        fetchData();
        return () => {
            console.log('done');
        }
    },[])
    return (
        <div>
            {
               items && <div>{items.email}</div>
            }
            {
                users.map((user,index) => <UserComponent foo={foo} key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;