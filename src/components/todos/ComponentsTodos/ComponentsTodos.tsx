
import './ComponentsTodos.css'
import {useEffect, useState} from "react";
import type {ITodos} from "../../../modules/ITodos.ts";
import ComponentTodos from "../ComponentTodos/ComponentTodos.tsx";
import {getTodos} from "../../../service/service_dummyJSON.ts";


const ComponentsTodos = () => {

    const [todos,setTodos] = useState<ITodos[]>([])

    useEffect(() => {

        getTodos()
            .then(res => setTodos(res))

    },[])


    return (
        <div>

            <h2>Todos</h2>

            <div className="table">

                {
                    todos.map((todo,index) => (<ComponentTodos key={index} todo={todo}/>))
                }

            </div>
        </div>

    );
};

export default ComponentsTodos;