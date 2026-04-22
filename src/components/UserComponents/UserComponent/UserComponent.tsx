import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import type {FC} from "react";

type UserComponentType = {
    user: IUser
}

const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <h4>Address:</h4>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserComponent;