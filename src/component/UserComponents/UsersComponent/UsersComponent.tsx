import {useEffect, useState} from "react";
import type {IUser} from "../../../modules/UserModules/IUser.ts";
import {getUsers} from "../../../services/services.tsx";
import UserComponent from "../UserComponent/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [query] = useSearchParams();

    useEffect(() => {

        const page = query.get("page");

        getUsers(page || '1')
            .then(value => setUsers(value))
    },[query])
    return (
        <div>
            {
                users.map(user => (<UserComponent user={user} key={user.id}/>))
            }
        </div>
    );
};

export default UsersComponent;