import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import {useEffect, useState} from "react";
import {services} from "../../../services/services.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";
import './UsersComponent.css'

const UsersComponent = () => {

    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        services.getUsers()
            .then(allUsers => setUsers(allUsers))
    },[])
    return (
        <div className='table'>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;