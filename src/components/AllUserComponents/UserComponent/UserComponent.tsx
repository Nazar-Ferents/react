import type {FC} from "react";
import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import './UserComponent.css'

type UserComponentType ={
    user:IUser
}
const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <div className='cell'>

            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.address}</p>
            <p>Age: {user.age}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Gender: {user.gender}</p>

        </div>
    );
};

export default UserComponent;