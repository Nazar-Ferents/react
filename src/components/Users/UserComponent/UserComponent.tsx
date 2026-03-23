import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import type {FC} from "react";

type UserComponentType = {
    user:IUser
}

const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <div>

            <div>{user.name}</div>

        </div>
    );
};

export default UserComponent;