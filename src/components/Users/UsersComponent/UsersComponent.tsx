import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import {useEffect, useState} from "react";
import {userService} from "../../../services/apiService.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {

        userService.getUsers().then((allUsers)=>{
            setUsers(allUsers);
        })
    },[])

    return (
        <div>

            {
                users.map(user=>(<UserComponent key={user.id} user={user}/>))
            }

        </div>
    );
};

export default UsersComponent;