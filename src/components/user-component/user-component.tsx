import {type FC} from 'react';
import type {IUser} from "../../modules/IUser.ts";

type UserComponentType = {
    user:IUser
}

const UserComponent:FC<UserComponentType> = ({user}) => {
    return (

            <div key={user.id}> {user.name}</div>)


};

export default UserComponent;