import type {FC} from "react";
import type {IUserJSON} from "../../../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";
import {useNavigate} from "react-router-dom";
import './JSONUserComponent.css'


type JsonUserComponentType = {
    user:IUserJSON
}
const JsonUserComponent:FC<JsonUserComponentType> = ({user}) => {
const navigate = useNavigate()
    const handler = () => {
        navigate('postsByUserIdJSON/' + user.id,{state:user})
    }
    return (
        <div className='user-card'>
            <h2 className='title'>{user.name}</h2>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>User Name: {user.username}</p>
            <button onClick={handler} className='btn'>Posts</button>

        </div>
    );
};

export default JsonUserComponent;