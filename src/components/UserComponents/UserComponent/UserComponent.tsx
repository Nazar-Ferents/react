import type {IUser} from "../../../modules/IUser.ts";
import type {FC} from "react";


type UserComponentType = {
    user:IUser
}
const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <div className='user-card'>
             <h2>{user.firstName} {user.lastName}</h2>
            <p>Phone: {user.phone}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Address: {user.address.address}</p>
            <p>User ID: {user.id}</p>
        </div>
    );
};

export default UserComponent;