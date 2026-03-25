import {useEffect, useState} from "react";
import type {IUserJSON} from "../../../../modules/JSONModules/UsersModules/IUserJSON.ts";
import {serviceJSON} from "../../../../services/JSON_api/JSON_api.ts";
import UserComponents from "../UserComponents/UserComponents.tsx";

const UsersComponents = () => {

    const [users, setUsers] = useState<IUserJSON[]>([]);

    useEffect(() => {

        serviceJSON.getUsers()
            .then(allUsers => setUsers(allUsers));
    },[])
    return (
        <div className="table">

            {
                users.map(user => (<UserComponents key={user.id} user={user} />))
            }

        </div>
    );
};

export default UsersComponents;