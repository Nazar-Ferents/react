import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../../modules/IUser.ts";
import {ServiceDummy} from "../../../services/serviceDummy.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams()

    useEffect(() => {

        const pg = query.get('pg')


            ServiceDummy.getUsers(pg || '1')
                .then(value => {
                    setUsers(value)
                })

    },[query])
    return (
        <div className='container'>
            <h1 className='page-title'>Users</h1>
            <div className='table'>{
                users.map((user) => (<UserComponent user={user} key={user.id} />))
            }</div>

        </div>
    );
};

export default UsersComponent;