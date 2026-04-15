import type {FC} from "react";
import type {IUserJSON} from "../../../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";


type JsonUserComponentType = {
    user:IUserJSON
}
const JsonUserComponent:FC<JsonUserComponentType> = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>User Name: {user.username}</p>

        </div>
    );
};

export default JsonUserComponent;