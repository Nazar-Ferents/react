import type {FC} from "react";
import type {IUser} from "../../../modules/UserModules/IUser.ts";

type UserComponentType ={
    user:IUser
}
const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <div>
            <h2>{user.lastName} {user.firstName}</h2>
            <p>Age:{user.age}</p>
            <p>Gender:{user.gender}</p>
            <p>Birth Date:{user.birthDate}</p>
            <p>ID: {user.id}</p>
        </div>
    );
};

export default UserComponent;