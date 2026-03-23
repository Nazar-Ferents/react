import type {IUser} from "../../../modules/UsersModules/IUser.ts";
import type {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

type UserComponentType = {
    user:IUser
}

const UserComponent:FC<UserComponentType> = ({user}) => {

    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('details',{state:user})
    }
    return (
        <div>

            <div>
                <Link to={'details'} state={user}>{user.name}</Link></div>

            <button onClick={handleOnClick}>go to details</button>

        </div>
    );
};

export default UserComponent;