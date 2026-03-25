import type {FC} from "react";
import type {IUserDummy} from "../../../../modules/DummyModules/UsersModules/IUserDummy.ts";

type UserComponentsDummyType ={
    user:IUserDummy
}
const UserComponentsDummy:FC<UserComponentsDummyType> = ({user}) => {
    return (
        <div className='cell'>

            <h2>{user.firstName} {user.lastName}</h2>

        </div>
    );
};

export default UserComponentsDummy;