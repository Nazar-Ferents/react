import type {IUserDummy} from "../../../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";
import {useEffect, useState} from "react";
import {DummyService} from "../../../../services/DummyService/DummyService.tsx";
import DummyUserComponent from "../DummyUserComponent/DummyUserComponent.tsx";

const DummyUsersComponent = () => {

    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {

        DummyService.getAllDummyUsers()
            .then(value => {
                setUsers(value)
                console.log(value)
            });
    },[])
    return (
        <div>
            {
                users.map(user => (<DummyUserComponent user={user} key={user.id}/>))
            }
        </div>
    );
};

export default DummyUsersComponent;