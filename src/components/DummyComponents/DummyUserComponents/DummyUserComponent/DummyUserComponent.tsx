import type {FC} from "react";
import type {IUserDummy} from "../../../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";
import {useNavigate} from "react-router-dom";
import './DummyUser.css'

type DummyUserComponentType = {
    user:IUserDummy
}

const DummyUserComponent:FC<DummyUserComponentType> = ({user}) => {
    const navigate = useNavigate()
    const handler = () =>{
        navigate('postsByUserIdDummy/'+user.id,{state:user})
    }
    return (
        <div className='user-card'>
            <h2 className='title'>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={handler} className='btn'>Post</button>

        </div>
    );
};

export default DummyUserComponent;