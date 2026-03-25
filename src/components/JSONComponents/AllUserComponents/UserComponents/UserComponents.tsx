import type {FC} from "react";
import type {IUserJSON} from "../../../../modules/JSONModules/UsersModules/IUserJSON.ts";

type UserComponentsType = {
    user: IUserJSON;
}

const UserComponents:FC<UserComponentsType> = ({user}) => {
    return (
        <div className='cell'>

            <h2>{user.name}</h2>

        </div>
    );
};

export default UserComponents;