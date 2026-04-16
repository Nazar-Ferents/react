import {type FC, useContext} from "react";
import type {IUserDummy} from "../../../../modules/DummyModules/UsesrModulesDummy/IUserDummy.ts";
import {useNavigate} from "react-router-dom";
import './DummyUser.css'
import {MyContext} from "../../../../context/MyContext.tsx";

type DummyUserComponentType = {
    user:IUserDummy
}

const DummyUserComponent:FC<DummyUserComponentType> = ({user}) => {
    const navigate = useNavigate()
    const handler = () =>{
        navigate('postsByUserIdDummy/'+user.id,{state:user})
    }

    const {theme,changeTheme} = useContext(MyContext)
    const changerDark = () => {
        changeTheme('dark');
    }

    const changerLight = () => {

        changeTheme('light')
    }
    return (
        <div className={theme}>
        <div className='user-card'>
            <h2 className='title'>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>
            <div className='btns'>
                <button onClick={handler} className='btn'>Post</button>
                <button onClick={changerDark} className='btn'>Dark Theme</button>
                <button onClick={changerLight} className='btn'>Light Theme</button>
            </div>


        </div>
        </div>
    );
};

export default DummyUserComponent;