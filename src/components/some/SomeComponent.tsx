import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../modules/IUser.ts";
import {getUsers} from "../../services/service.ts";
import UserComponent from "../UserComponents/UserComponent/UserComponent.tsx";

const SomeComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query] =useSearchParams()
    useEffect(() => {
        const pg =query.get('pg');



        getUsers(pg || '1')
        .then(value => setUsers(value))
    },[query])
    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} user={user} />))
            }
        </div>
    );
};

export default SomeComponent;