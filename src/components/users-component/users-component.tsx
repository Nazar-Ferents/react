import  {useEffect, useState} from 'react';
import type {IUser} from "../../modules/IUser.ts";
import UserComponent from "../user-component/user-component.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);

            });
        return () => {
            console.log('done');
        }
    },[])
    return (
        <div>
            {
                users.map((user,index) => <UserComponent key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;