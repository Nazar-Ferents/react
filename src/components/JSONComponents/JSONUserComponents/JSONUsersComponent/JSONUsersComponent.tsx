import type {IUserJSON} from "../../../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";
import {useEffect, useState} from "react";
import {JSONService} from "../../../../services/JSONService/JSONService.tsx";
import JSONUserComponent from "../JSONUserComponent/JSONUserComponent.tsx";
import './JSONUsersComponent.css'

const JsonUsersComponent = () => {

    const [ users, setUsers ] = useState<IUserJSON[]>([]);

    useEffect(() => {

        JSONService.getAllJSONUsers()
            .then(users => setUsers(users));
    },[])
    return (
        <div className='container'>
            {
                users.map((user) => (<JSONUserComponent user={user} key={user.id} />))
            }
        </div>
    );
};

export default JsonUsersComponent;