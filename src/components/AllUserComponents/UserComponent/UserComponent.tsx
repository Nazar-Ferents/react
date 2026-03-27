import type {FC} from "react";
import type {IUser} from "../../../modules/UserModules/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserComponentType = {
    user:IUser
}
const UserComponent:FC<UserComponentType> = ({user}) => {

    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/users/carts/' + user.id)
    }

    return (
        <div>

            <p>{user.lastName} {user.firstName}</p>
            <button onClick={handleOnClick}>open carts</button>

        </div>
    );
};

export default UserComponent;