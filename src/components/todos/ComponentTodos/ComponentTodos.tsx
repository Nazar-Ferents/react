import type {ITodos} from "../../../modules/ITodos.ts";
import type {FC} from "react";
import './ComponentTodos.css'


type ComponentTodosType = {
    todo:ITodos
}

const ComponentTodos:FC<ComponentTodosType> = ({todo}) => {

    return (
        <div className='cell'>

            <h3>{todo.todo}</h3>
            <p>ID: {todo.id}</p>
            <p>UserID: {todo.userId}</p>
            <p>Status: {`${todo.completed}`}</p>

        </div>
    );
};

export default ComponentTodos;