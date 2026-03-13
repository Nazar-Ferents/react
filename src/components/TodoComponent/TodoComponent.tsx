import {type FC} from 'react';
import type {IUsers} from "../../modules/IUsers.ts";
import './TodoComponent.css'


type TodoComponentType = {
    user:IUsers
}

const TodoComponent:FC<TodoComponentType> = ({user}) => {
    return (
        <div className='cell'>

            <h3>User {user.id}</h3>
            <p>UserID: {user.userId}</p>
            <p>Title: {user.title}</p>
            <p>Status: {user.completed}</p>


        </div>
    );
};

export default TodoComponent;