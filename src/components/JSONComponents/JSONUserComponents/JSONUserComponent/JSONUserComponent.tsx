import {type FC, useContext} from "react";
import type {IUserJSON} from "../../../../modules/JSONModules/UserModulesJSON/IUserJSON.ts";
import {useNavigate} from "react-router-dom";
import './JSONUserComponent.css'
import {MyContext} from "../../../../context/MyContext.tsx";


type JsonUserComponentType = {
    user:IUserJSON
}
const JsonUserComponent:FC<JsonUserComponentType> = ({user}) => {
const navigate = useNavigate()
    const handler = () => {
        navigate('postsByUserIdJSON/' + user.id,{state:user})
    }

    const {theme,changeTheme} = useContext(MyContext)

    const changerDark = () => {

    changeTheme('dark')
    }
    const changerLight = () => {

    changeTheme('light')
    }
    return (
       <div className={theme}>
           <div className='user-card'>
               <h2 className='title'>{user.name}</h2>
               <p>Phone: {user.phone}</p>
               <p>Email: {user.email}</p>
               <p>User Name: {user.username}</p>

               <div className='btns'>
                   <button onClick={handler} className='btn'>Posts</button>
                   <button onClick={changerDark} className='btn'>Dark Theme</button>
                   <button onClick={changerLight} className='btn'>Light Theme</button>
               </div>

           </div>
       </div>
    );
};

export default JsonUserComponent;