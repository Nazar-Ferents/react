import {useEffect, useState} from 'react';
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {getUsers} from "../../services/users_service.ts";
import type {IUsers} from "../../modules/IUsers.ts";
import './TodoComponents.css'

const TodoComponents = () => {

    const [users,SetUser] = useState<IUsers[]>([])

    useEffect(() => {

        getUsers()
            .then(value => SetUser(value))


    },[])

    return (
        <div className='table'>

            {users.map((user,index) => <TodoComponent user={user} key={index}/>)}

        </div>

    );
};

export default TodoComponents;