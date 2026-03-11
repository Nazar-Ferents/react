import {type FC} from 'react';
import type {IUser} from "../../modules/IUser.ts";

type UserComponentType = {
    user:IUser
    foo:(item:IUser)=>void
}

const UserComponent:FC<UserComponentType> = ({user,foo}) => {
    return (
<>

    <div key={user.id}> {user.name}</div>
    <button onClick={()=>{
        foo(user);
    }}>details</button>
</>
        )


};

export default UserComponent;