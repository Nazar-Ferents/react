import type {FC} from "react";
import type {IUser} from "../../../modules/IUser.ts";

type PropsType = {
    user:IUser
}
const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>

            <p>{user.firstName} {user.lastName}</p>

        </div>
    );
};

export default UserComponent;