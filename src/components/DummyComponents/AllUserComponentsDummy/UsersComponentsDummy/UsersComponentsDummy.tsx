import type {IUserDummy} from "../../../../modules/DummyModules/UsersModules/IUserDummy.ts";
import {useEffect, useState} from "react";
import {serviceDummy} from "../../../../services/Dummy_api/Dummy_api.ts";
import UserComponentsDummy from "../UserComponentsDummy/UserComponentsDummy.tsx";

const UsersComponentsDummy = () => {

    const [users,setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {

        serviceDummy.getUsers()
            .then(allUsers => setUsers(allUsers));
    },[])
    return (
        <div className='table'>
            {
                users.map(user => (<UserComponentsDummy key={user.id} user={user} />))
            }
            
        </div>
    );
};

export default UsersComponentsDummy;