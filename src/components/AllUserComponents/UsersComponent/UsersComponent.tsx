import {useEffect, useState} from "react";
import type {IUser} from "../../../modules/UserModules/IUser.ts";
import {serviceAPI} from "../../../services/serviceAPI.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

        serviceAPI.getUsers()
            .then(allUsers => setUsers(allUsers))
    },[])
    return (
        <div>
            {users.map((user) => (<UserComponent user={user} key={user.id} />))}
        </div>
    );
};

export default UsersComponent;